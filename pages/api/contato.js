import nodemailer from "nodemailer";
import { assuntos } from "../../data/advocacia";

/**
 * POST /api/contato — envia a mensagem do formulário por SMTP (Resend ou Google Workspace).
 *
 * Variáveis de ambiente (Vercel → Settings → Environment Variables):
 *   SMTP_HOST / SMTP_PORT  servidor (padrão: smtp.gmail.com / 465; Resend: smtp.resend.com / 465)
 *   SMTP_USER   usuário SMTP (Gmail: o e-mail da conta; Resend: "resend")
 *   SMTP_PASS   senha (Gmail: "senha de app"; Resend: API key re_…)
 *   SMTP_FROM   remetente (padrão: SMTP_USER). No Resend precisa ser de um domínio verificado.
 *   CONTACT_TO  destino das mensagens (padrão: SMTP_USER; aceita vários separados por vírgula)
 */

const LIMITS = { nome: 120, email: 160, telefone: 40, empresa: 160, assunto: 60, mensagem: 5000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Limite simples por IP (best effort: cada instância serverless tem sua própria memória).
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map();

function rateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

const clean = (v, max) =>
  String(v ?? "")
    .replace(/\r\n?/g, "\n")
    .trim()
    .slice(0, max);

// Campos de uma linha: sem quebras (evita injeção em cabeçalhos do e-mail).
const oneLine = (v, max) => clean(v, max).replace(/\s*\n\s*/g, " ");

const escapeHtml = (s) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

let transporter;
function getTransporter() {
  if (!transporter) {
    const port = Number(process.env.SMTP_PORT || 465);
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port,
      secure: port === 465,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });
  }
  return transporter;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "method_not_allowed" });
  }

  const body = typeof req.body === "object" && req.body ? req.body : {};

  // Honeypot: bots preenchem o campo oculto "website". Fingimos sucesso.
  if (body.website) return res.status(200).json({ ok: true });

  const data = {
    nome: oneLine(body.nome, LIMITS.nome),
    email: oneLine(body.email, LIMITS.email),
    telefone: oneLine(body.telefone, LIMITS.telefone),
    empresa: oneLine(body.empresa, LIMITS.empresa),
    assunto: oneLine(body.assunto, LIMITS.assunto),
    mensagem: clean(body.mensagem, LIMITS.mensagem),
  };
  if (!assuntos.includes(data.assunto)) data.assunto = "Outros";

  const fields = [];
  if (!data.nome) fields.push("nome");
  if (!EMAIL_RE.test(data.email)) fields.push("email");
  if (!data.mensagem) fields.push("mensagem");
  if (fields.length) return res.status(400).json({ ok: false, error: "invalid", fields });

  const ip = String(req.headers["x-forwarded-for"] || req.socket?.remoteAddress || "").split(",")[0].trim();
  if (rateLimited(ip)) return res.status(429).json({ ok: false, error: "rate_limited" });

  const from = process.env.SMTP_FROM || process.env.SMTP_USER;
  const to = process.env.CONTACT_TO || process.env.SMTP_USER;
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS || !EMAIL_RE.test(from || "")) {
    console.error("[api/contato] SMTP_USER/SMTP_PASS/SMTP_FROM não configurados.");
    return res.status(503).json({ ok: false, error: "unconfigured" });
  }

  const rows = [
    ["Nome", data.nome],
    ["E-mail", data.email],
    ["Telefone", data.telefone || "—"],
    ["Empresa / atividade / projeto", data.empresa || "—"],
    ["Assunto", data.assunto],
  ];
  const text = `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\nMensagem:\n${data.mensagem}\n`;
  const html = `
    <table cellpadding="6" style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">
      ${rows.map(([k, v]) => `<tr><td style="color:#555"><b>${k}</b></td><td>${escapeHtml(v)}</td></tr>`).join("")}
    </table>
    <p style="font-family:Arial,sans-serif;font-size:14px;color:#555;margin:16px 0 4px"><b>Mensagem</b></p>
    <div style="font-family:Arial,sans-serif;font-size:14px;white-space:pre-wrap">${escapeHtml(data.mensagem)}</div>
  `;

  try {
    await getTransporter().sendMail({
      from: { name: "Site Futuro Rocha", address: from },
      to,
      replyTo: { name: data.nome, address: data.email },
      subject: `[Site] ${data.assunto} — ${data.nome}`,
      text,
      html,
    });
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("[api/contato] Falha no envio:", err?.code || "", err?.message || err);
    return res.status(502).json({ ok: false, error: "send_failed" });
  }
}

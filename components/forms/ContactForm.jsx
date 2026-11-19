import { useEffect, useRef, useState } from "react";
import Icon from "../ui/Icon";
import ExternalLink from "../ui/ExternalLink";
import { assuntos } from "../../data/advocacia";
import { links, site, track } from "../../data/site";
import styles from "./ContactForm.module.scss";

/**
 * Formulário de contato (Visual-Advocacia 275–284).
 * Envia para a rota própria /api/contato, que dispara o e-mail pelo SMTP do Google Workspace.
 *
 * @param {string} assunto        assunto selecionado (controlado pela página)
 * @param {function} onAssuntoChange
 * @param {string} mensagemInicial texto sugerido ao escolher um plano
 */
export default function ContactForm({ assunto, onAssuntoChange, mensagemInicial = "" }) {
  const formRef = useRef(null);
  // idle | sending | success | error | unconfigured | invalid | rate_limited
  const [status, setStatus] = useState("idle");
  const [mensagem, setMensagem] = useState("");

  // Preenche a mensagem sugerida só se o usuário ainda não escreveu nada.
  useEffect(() => {
    if (mensagemInicial) setMensagem((atual) => (atual.trim() ? atual : mensagemInicial));
  }, [mensagemInicial]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = formRef.current;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.ok) {
        setStatus("success");
        track("form_submit", { form: "contato", assunto: data.assunto });
        if (typeof window.fbq === "function") window.fbq("track", "Lead", { content_category: data.assunto });
        form.reset();
        setMensagem("");
        return;
      }
      const known = { unconfigured: "unconfigured", invalid: "invalid", rate_limited: "rate_limited" };
      setStatus(known[json.error] || "error");
      track("form_error", { form: "contato", motivo: json.error || res.status });
    } catch (err) {
      setStatus("error");
      track("form_error", { form: "contato", motivo: "network" });
    }
  };

  const fallbackText = () => {
    const form = formRef.current;
    if (!form) return "";
    const d = Object.fromEntries(new FormData(form).entries());
    return `Olá! Sou ${d.nome || ""}${d.empresa ? ` (${d.empresa})` : ""}. Assunto: ${d.assunto}. ${d.mensagem || ""}`.trim();
  };

  return (
    <form ref={formRef} className={`card ${styles.form}`} onSubmit={onSubmit}>
      <label className="field">
        Nome *
        <input type="text" name="nome" autoComplete="name" required />
      </label>
      <label className="field">
        E-mail *
        <input type="email" name="email" autoComplete="email" required />
      </label>
      <label className="field">
        Telefone
        <input type="tel" name="telefone" autoComplete="tel" />
      </label>
      <label className="field">
        Empresa / atividade / projeto
        <input type="text" name="empresa" autoComplete="organization" />
      </label>
      <label className="field full">
        Assunto
        <select name="assunto" value={assunto} onChange={(e) => onAssuntoChange?.(e.target.value)}>
          {assuntos.map((a) => (
            <option key={a}>{a}</option>
          ))}
        </select>
      </label>
      <label className="field full">
        Como podemos ajudar? *
        <textarea name="mensagem" rows={4} required value={mensagem} onChange={(e) => setMensagem(e.target.value)} />
      </label>

      {/* Honeypot anti-spam: invisível para pessoas */}
      <div className={styles.hp} aria-hidden="true">
        <label>
          Não preencha este campo
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <p className={`tiny full ${styles.note}`}>
        <Icon name="lockClosed" size={16} strokeWidth={1.8} style={{ flex: "none", marginTop: 1 }} />
        <span>
          Evite enviar documentos ou informações sensíveis neste primeiro contato.{" "}
          <ExternalLink href={links.privacidade} className="">
            Política de Privacidade
          </ExternalLink>
        </span>
      </p>

      <div className="full">
        <button type="submit" className="btn pri" style={{ width: "100%" }} disabled={status === "sending"}>
          {status === "sending" ? "Enviando…" : "Enviar mensagem"} <Icon name="arrow" size={16} strokeWidth={2} />
        </button>
      </div>

      <div className={`full ${styles.status}`} role="status" aria-live="polite">
        {status === "success" && <p className={styles.ok}>Mensagem enviada. Retornaremos em breve pelo e-mail informado.</p>}
        {status === "invalid" && <p className={styles.err}>Confira nome, e-mail e mensagem e tente novamente.</p>}
        {status === "rate_limited" && (
          <p className={styles.err}>
            Recebemos várias mensagens em sequência. Aguarde alguns minutos ou fale conosco pelo{" "}
            <a href={site.whatsappUrlWithText(fallbackText())} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
            .
          </p>
        )}
        {status === "error" && (
          <p className={styles.err}>
            Não foi possível enviar agora. Tente novamente ou fale conosco pelo{" "}
            <a href={site.whatsappUrlWithText(fallbackText())} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>{" "}
            ou pelo e-mail <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        )}
        {status === "unconfigured" && (
          <p className={styles.err}>
            O envio pelo site está temporariamente indisponível. Continue pelo{" "}
            <a href={site.whatsappUrlWithText(fallbackText())} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>{" "}
            ou envie um e-mail para{" "}
            <a href={`mailto:${site.email}?subject=${encodeURIComponent(`Contato pelo site — ${assunto}`)}&body=${encodeURIComponent(fallbackText())}`}>
              {site.email}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}

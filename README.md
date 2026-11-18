# Futuro Rocha — site

Site institucional em Next.js 13 (pages router), com duas páginas:

| Rota | Conteúdo |
| --- | --- |
| `/` e `/advocacia` | Futuro Rocha ADV, com formulário de contato (`#contato`); canonical em `/` |
| `/propriedade-intelectual` | Futuro Rocha PI |

O design de referência fica em `docs/design/`: as pranchas `Visual-*.dc.html` valem como layout final, e os wireframes como referência de conteúdo.

## Rodar

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Onde editar

- **Textos:** `data/pi.js` e `data/advocacia.js`.
- **Contatos, URLs, redes, analytics e imagens:** `data/site.js`. Os itens marcados com `TODO(cliente)` estão pendentes de envio pelo cliente.
- **Estilos globais e tokens do design:** `styles/globals.scss`.
- **Seções:** `components/sections/pi/*` e `components/sections/adv/*`.

## Formulário de contato

O formulário envia para a rota própria `pages/api/contato.js`, que dispara o e-mail por SMTP (biblioteca `nodemailer`). Funciona com **Resend** (`smtp.resend.com`) ou com o SMTP do **Google Workspace**; veja os dois modelos em `.env.example`.

1. **Resend:** adicione o domínio em resend.com → Domains e crie no DNS os registros que ele mostrar (DKIM em `resend._domainkey` e MX/SPF no subdomínio `send`; não conflitam com o MX do Google Workspace). Depois crie uma API key com "Sending access".
   **Google Workspace:** na conta que vai enviar, ative a verificação em duas etapas e gere uma **senha de app** (myaccount.google.com → Segurança → Senhas de app).
2. Configure `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM` e `CONTACT_TO` na Vercel (Settings → Environment Variables) e faça um novo deploy. Para testar localmente, use as mesmas variáveis em `.env.local` (modelo em `.env.example`).

O e-mail chega com o assunto `[Site] <assunto> — <nome>`, e o "Responder" já vai para quem preencheu o formulário.

A rota tem validação, honeypot anti-spam e limite de 5 envios a cada 10 minutos por IP. Sem as variáveis, ou se o envio falhar, o formulário mostra links para WhatsApp e e-mail.

O assunto pode vir pré-selecionado pela URL: `/?assunto=pi#contato`. Os valores aceitos são `pi`, `adv`, `planos` e `parcerias`.

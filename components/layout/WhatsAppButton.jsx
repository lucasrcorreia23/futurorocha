import { site, track } from "../../data/site";
import styles from "./WhatsAppButton.module.scss";

// Botão flutuante de WhatsApp. Não aparece na proposta visual; foi mantido do site anterior.
export default function WhatsAppButton() {
  return (
    <a
      className={styles.fab}
      href={site.whatsappUrlWithText("Olá! Gostaria de falar com o Futuro Rocha.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com o Futuro Rocha pelo WhatsApp (abre em nova aba)"
      onClick={() => track("whatsapp_click", { origem: "flutuante" })}
    >
      <svg width="28" height="28" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
        <path d="M16.04 3C9.4 3 4 8.36 4 14.97c0 2.12.56 4.18 1.62 6L4 29l8.24-2.15a12.1 12.1 0 0 0 3.8.62h.01C22.68 27.47 28 22.1 28 15.5 28 8.9 22.67 3 16.04 3Zm0 22.4h-.01a10.1 10.1 0 0 1-5.13-1.4l-.37-.22-4.89 1.28 1.3-4.75-.24-.39a9.9 9.9 0 0 1-1.53-5.3c0-5.5 4.5-9.97 10.04-9.97 2.68 0 5.2 1.04 7.1 2.93a9.9 9.9 0 0 1 2.93 7.06c0 5.5-4.5 9.98-9.98 9.98Zm5.5-7.46c-.3-.15-1.78-.88-2.06-.98-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.49a9.1 9.1 0 0 1-1.67-2.08c-.18-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.47 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.48.71.31 1.27.5 1.7.63.72.23 1.37.2 1.88.12.58-.09 1.78-.72 2.03-1.42.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.58-.35Z" />
      </svg>
    </a>
  );
}

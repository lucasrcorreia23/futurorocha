import Icon from "../../ui/Icon";
import ContactForm from "../../forms/ContactForm";
import { site, track } from "../../../data/site";
import styles from "./ContatoAdv.module.scss";

// Visual-Advocacia 262–286
export default function ContatoAdv({ assunto, onAssuntoChange, mensagemInicial }) {
  return (
    <section
      className="sec"
      id="contato"
      style={{ background: "radial-gradient(55% 60% at 10% 30%,rgba(109,40,217,.2),rgba(7,7,13,0) 70%)" }}
      aria-labelledby="contato-title"
    >
      <div className="wrap grid items-start" style={{ "--min": "320px", "--gap": "56px" }}>
        <div>
          <div className="eyebrow">Contato</div>
          <h2 id="contato-title">Converse com o Futuro Rocha.</h2>
          <p className="muted" style={{ marginTop: 20 }}>
            Conte brevemente sua necessidade. A partir das informações iniciais, identificaremos a natureza da demanda e a melhor
            forma de direcionar o atendimento.
          </p>
          <div className={styles.info}>
            <a href={`mailto:${site.email}`} className={styles.line}>
              <span className="ico md">
                <Icon name="mail" />
              </span>
              {site.email}
            </a>
            <div className={styles.line}>
              <span className="ico md">
                <Icon name="pin" />
              </span>
              Florianópolis - SC
            </div>
          </div>
          <a
            className="btn"
            href={site.whatsappUrlWithText("Olá! Gostaria de atendimento jurídico.")}
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginTop: 32 }}
            onClick={() => track("whatsapp_click", { origem: "contato_adv" })}
          >
            <Icon name="whatsapp" size={18} strokeWidth={1.8} />
            Atendimento pelo WhatsApp
          </a>
        </div>
        <ContactForm assunto={assunto} onAssuntoChange={onAssuntoChange} mensagemInicial={mensagemInicial} />
      </div>
    </section>
  );
}

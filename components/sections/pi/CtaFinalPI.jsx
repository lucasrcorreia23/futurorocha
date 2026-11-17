import Link from "next/link";
import Icon from "../../ui/Icon";
import { images, site, track } from "../../../data/site";
import styles from "./CtaFinalPI.module.scss";

// Visual-PI 262–277
export default function CtaFinalPI() {
  return (
    <section className="sec pt-40" id="contato" aria-labelledby="cta-pi-title">
      <div className="wrap">
        <div className={styles.box}>
          <div className={styles.grid} aria-hidden="true" />
          {images.ctaPiBg && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={images.ctaPiBg} alt="" aria-hidden="true" className={styles.img} loading="lazy" />
          )}
          <div className={styles.shade} aria-hidden="true" />
          <div className={styles.content}>
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              Fale com o Futuro Rocha PI
            </div>
            <h2 id="cta-pi-title" className={styles.title}>
              Vamos proteger seus ativos?
            </h2>
            <p className="muted" style={{ marginTop: 18 }}>
              Conte brevemente sua necessidade. Analisaremos o contexto para direcionar a forma adequada de atuação.
            </p>
            <div className="btns" style={{ justifyContent: "center", marginTop: 36 }}>
              <Link
                className="btn pri"
                href="/advocacia?assunto=pi#contato"
                onClick={() => track("cta_click", { cta: "solicite_analise_pi" })}
              >
                Solicite uma análise <Icon name="arrow" size={16} strokeWidth={2} />
              </Link>
              <a
                className="btn"
                href={site.whatsappUrlWithText("Olá! Gostaria de uma análise sobre propriedade intelectual.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("whatsapp_click", { origem: "cta_pi" })}
              >
                <Icon name="whatsapp" size={18} strokeWidth={1.8} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

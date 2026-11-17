import Icon from "../../ui/Icon";
import { depoimentos } from "../../../data/pi";
import styles from "./Depoimentos.module.scss";

// Visual-PI 231–244 (com fotos reais e texto completo, conforme decisão do cliente)
export default function Depoimentos() {
  return (
    <section className="sec line-top" aria-labelledby="depoimentos-title">
      <div className="wrap">
        <div className="head-row">
          <div>
            <div className="eyebrow">Depoimentos</div>
            <h2 id="depoimentos-title">Experiência reconhecida por nossos clientes</h2>
          </div>
          <p className={`small ${styles.location}`}>
            <Icon name="pin" size={16} strokeWidth={1.8} style={{ color: "#A78BFA" }} />
            Florianópolis · SC, com atuação nacional e internacional.
          </p>
        </div>
        <div className="grid" style={{ "--min": "280px", "--gap": "16px" }}>
          {depoimentos.map((d) => (
            <figure className={`card ${styles.item}`} key={d.name}>
              <div>
                <Icon name="quote" />
                <blockquote className={styles.quote}>{d.text}</blockquote>
              </div>
              <figcaption className={styles.author}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={d.photo} alt="" width="44" height="44" loading="lazy" className={styles.photo} />
                <span>
                  <span className={styles.name}>{d.name}</span>
                  <span className="tiny">{d.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

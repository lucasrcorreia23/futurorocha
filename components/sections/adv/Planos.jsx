import { PlanIcon } from "../../ui/Icon";
import { planos, planosEtapas } from "../../../data/advocacia";
import { images, track } from "../../../data/site";
import styles from "./Planos.module.scss";

// Visual-Advocacia 207–228. Sem preços, horas ou itens "ilimitados".
export default function Planos({ onChooseAssunto }) {
  return (
    <section className={`sec ${styles.sec}`} aria-labelledby="planos-title">
      {images.planosBg ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={images.planosBg} alt="" aria-hidden="true" className={styles.bg} loading="lazy" />
      ) : (
        <div className={styles.glow} aria-hidden="true" />
      )}
      <div className={styles.shade} aria-hidden="true" />
      <div className="wrap" style={{ position: "relative" }}>
        <div className="head-row">
          <div style={{ maxWidth: 560 }}>
            <div className="eyebrow">Assessoria jurídica recorrente</div>
            <h2 id="planos-title">Planos Futuro Rocha</h2>
          </div>
          <p className="muted" style={{ maxWidth: 460 }}>
            Jurídico presente na rotina da empresa, do profissional ou do projeto — com escopo, prioridades e rotina definidos em
            proposta e contrato.
          </p>
        </div>

        <div className="grid" style={{ "--min": "240px", "--gap": "16px" }}>
          {planos.map((p) => (
            <div className={`card hov ${styles.plan} ${p.featured ? styles.featured : ""}`} key={p.title}>
              <PlanIcon name={p.icon} />
              <h3 className="h3-lg" style={{ marginTop: 24 }}>
                {p.title}
              </h3>
              <div className={`tiny ${styles.tag}`}>{p.tag}</div>
              <p className="small" style={{ marginTop: 14, flex: 1 }}>
                {p.text}
              </p>
              <a
                className={`btn sm ${p.featured ? "pri" : ""}`}
                href="#contato"
                style={{ marginTop: 24 }}
                aria-label={`Solicitar proposta do plano ${p.title}`}
                onClick={() => {
                  onChooseAssunto?.("Planos de assessoria", `Tenho interesse no plano ${p.title}.`);
                  track("cta_click", { cta: "solicitar_proposta", plano: p.title });
                }}
              >
                Solicitar proposta
              </a>
            </div>
          ))}
        </div>

        <ol className={`grid ${styles.steps}`} style={{ "--min": "240px", "--gap": "0px" }}>
          {planosEtapas.map((e, i) => (
            <li key={e.title}>
              <span className="step-n">{String(i + 1).padStart(2, "0")}</span>
              <h4 style={{ marginTop: 10 }}>{e.title}</h4>
              <p className="small" style={{ marginTop: 6 }}>
                {e.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

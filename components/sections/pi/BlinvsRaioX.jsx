import Icon from "../../ui/Icon";
import VideoCard from "../../ui/VideoCard";
import ExternalLink from "../../ui/ExternalLink";
import { blinvs } from "../../../data/pi";
import { links, track } from "../../../data/site";
import styles from "./BlinvsRaioX.module.scss";

// Visual-PI 98–141
export default function BlinvsRaioX() {
  return (
    <section className="sec pt-40" id="raio-x" aria-labelledby="raio-x-title">
      <div className="wrap">
        <div className="panel">
          <div className="grid items-start" style={{ "--min": "340px", "--gap": "48px" }}>
            <div>
              <div className="eyebrow">{blinvs.eyebrow}</div>
              <h2 id="raio-x-title">{blinvs.title}</h2>
              <p className="muted" style={{ marginTop: 22 }}>
                {blinvs.text1}
              </p>
              <p className="muted" style={{ marginTop: 14 }}>
                O Raio X BLINVS é uma ferramenta <span className="hl" style={{ fontWeight: 600 }}>gratuita</span> que ajuda
                empresas, profissionais e projetos a reconhecer seus ativos de propriedade intelectual, visualizar seu nível de
                proteção e identificar prioridades.
              </p>
              <div className="btns" style={{ marginTop: 32 }}>
                <ExternalLink href={links.raioX} className="btn pri" onClick={() => track("cta_click", { cta: "raio_x_gratuito" })}>
                  Fazer o Raio X gratuito <Icon name="arrow" size={16} strokeWidth={2} />
                </ExternalLink>
                <ExternalLink href={links.blinvs} className="btn" onClick={() => track("cta_click", { cta: "conheca_blinvs" })}>
                  Conheça a BLINVS
                </ExternalLink>
              </div>
            </div>

            <div className={styles.side}>
              <VideoCard
                mode="external"
                grid
                href={links.videoBlinvs}
                title="Vídeo: Conheça o Raio X BLINVS"
                label="Assista ao vídeo"
                sublabel="Conheça o Raio X BLINVS · ~1 min"
                top={
                  <>
                    <span className={styles.brand}>BLINVS</span>
                    <span className={`tiny ${styles.brandTag}`}>Gestão de ativos</span>
                  </>
                }
              />
              <div className={`card sm ${styles.score}`}>
                <svg width="72" height="72" viewBox="0 0 72 72" role="img" aria-label="Exemplo de nível de proteção: 44 de 100">
                  <circle cx="36" cy="36" r="30" fill="none" stroke="rgba(255,255,255,.08)" strokeWidth="6" />
                  <circle cx="36" cy="36" r="30" fill="none" stroke="#8B5CF6" strokeWidth="6" strokeLinecap="round" strokeDasharray="83 189" transform="rotate(-90 36 36)" />
                  <text x="36" y="42" textAnchor="middle" style={{ fontFamily: "var(--font-sora), sans-serif" }} fontSize="18" fontWeight="600" fill="#F4F3FA">
                    44
                  </text>
                </svg>
                <div>
                  <h4>Nível de proteção</h4>
                  <div className="small" style={{ marginTop: 4 }}>
                    Pontuação geral e indicadores por dimensão, com resultado na hora.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid" style={{ "--min": "220px", "--gap": "12px", marginTop: 40 }}>
            {blinvs.features.map((f) => (
              <div className={`card sm ${styles.feature}`} key={f.title}>
                <div className="ico sm">
                  <Icon name={f.icon} size={20} strokeWidth={1.7} />
                </div>
                <div>
                  <h4>{f.title}</h4>
                  <div className="small" style={{ marginTop: 4 }}>
                    {f.text}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 40 }}>
            <div className={`kicker ${styles.journeyTitle}`}>Uma jornada progressiva</div>
            <ol className={`grid ${styles.journey}`} style={{ "--min": "260px", "--gap": "16px" }}>
              {blinvs.journey.map((step, i) => (
                <li className="card hov" style={{ "--pad": "26px" }} key={step.title}>
                  <div className={styles.stepHead}>
                    <span className={`${styles.stepNum} ${i === 0 ? styles.stepNumOn : ""}`}>{i + 1}</span>
                    {step.badge && <span className={`tiny ${styles.badge}`}>{step.badge}</span>}
                  </div>
                  <h3>{step.title}</h3>
                  <p className="small subtitle" style={{ marginTop: 6 }}>
                    {step.subtitle}
                  </p>
                  <p className="small" style={{ marginTop: 10 }}>
                    {step.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <p className={`tiny ${styles.note}`}>
            <Icon name="info" size={16} strokeWidth={1.8} style={{ flex: "none", marginTop: 1 }} />
            <span>{blinvs.note}</span>
          </p>
        </div>
      </div>
    </section>
  );
}

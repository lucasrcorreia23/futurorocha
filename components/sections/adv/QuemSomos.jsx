import Icon from "../../ui/Icon";
import VideoCard from "../../ui/VideoCard";
import Logo from "../../layout/Logo";
import FounderPhoto from "../FounderPhoto";
import { formacao } from "../../../data/advocacia";
import { founder, links, track } from "../../../data/site";
import styles from "./QuemSomos.module.scss";

// Visual-Advocacia 230–260
export default function QuemSomos({ onChooseAssunto }) {
  return (
    <section className="sec line-top" id="fundador" aria-labelledby="quem-somos-title">
      <div className="wrap">
        <div className="grid items-stretch" style={{ "--min": "360px", "--gap": "24px" }}>
          <div className={styles.left}>
            <div className="eyebrow">Quem somos</div>
            <h2 id="quem-somos-title">Conheça o Futuro Rocha.</h2>
            <p className="muted" style={{ marginTop: 18 }}>
              Atuação empresarial, civil e digital, com experiência em contratos, tecnologia, propriedade intelectual e solução de
              conflitos.
            </p>
            <VideoCard
              mode="youtube"
              youtubeId={links.videoInstitucionalId}
              title="Vídeo institucional 2026 | Futuro Rocha"
              label="Vídeo institucional 2026"
              sublabel="Assista no YouTube"
              className={styles.video}
              top={
                <span style={{ opacity: 0.9 }}>
                  <Logo brand="adv" height={26} decorative />
                </span>
              }
            />
          </div>

          <div className={`card ${styles.founder}`}>
            <FounderPhoto className={styles.photo} />
            <div className={styles.body}>
              <div className="kicker">Nosso fundador</div>
              <h3 style={{ marginTop: 14, fontSize: 26 }}>{founder.name}</h3>
              <div className="small subtitle" style={{ marginTop: 6 }}>
                {founder.role}
              </div>
              <ul className="dots" style={{ marginTop: 20 }}>
                {formacao.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <p className={`small ${styles.bio}`}>
                Mais de 15 anos de atuação jurídica, com experiência em propriedade intelectual, contratos e litígios civis e
                empresariais, além de tecnologia, inovação e estruturação jurídica de empresas e projetos.
              </p>
            </div>
          </div>
        </div>

        <div className="band">
          <div className="band-body">
            <div className="ico">
              <Icon name="handshake" />
            </div>
            <div>
              <h3>Atuação em parceria</h3>
              <p className="small" style={{ marginTop: 6 }}>
                Expertise complementar para escritórios, departamentos jurídicos, consultorias, empresas e profissionais — com
                escopo e responsabilidades definidos.
              </p>
            </div>
          </div>
          <a
            className="btn"
            href="#contato"
            onClick={() => {
              onChooseAssunto?.("Parcerias profissionais");
              track("cta_click", { cta: "parcerias" });
            }}
          >
            Fale conosco sobre parcerias <Icon name="arrow" size={16} strokeWidth={2} />
          </a>
        </div>
      </div>
    </section>
  );
}

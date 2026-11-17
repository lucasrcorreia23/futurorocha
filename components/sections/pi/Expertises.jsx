import Icon from "../../ui/Icon";
import { expertises } from "../../../data/pi";

// Visual-PI 169–183
export default function Expertises() {
  return (
    <section className="sec" style={{ background: "linear-gradient(180deg,#07070D,#0B0A16 50%,#07070D)" }} aria-labelledby="expertises-title">
      <div className="wrap">
        <div className="head-row">
          <div style={{ maxWidth: 640 }}>
            <div className="eyebrow">Expertises especializadas</div>
            <h2 id="expertises-title">Expertise jurídica para setores, tecnologias e projetos.</h2>
          </div>
          <p className="muted" style={{ maxWidth: 440 }}>
            Alguns setores e projetos exigem conhecimento jurídico específico, especialmente quando tecnologia, criação,
            propriedade intelectual e regulação se encontram.
          </p>
        </div>
        <div className="grid" style={{ "--min": "240px", "--gap": "16px" }}>
          {expertises.map((e) => (
            <div className="card hov" key={e.title}>
              <div className="ico">
                <Icon name={e.icon} />
              </div>
              <h3 style={{ marginTop: 24 }}>{e.title}</h3>
              <p className="small" style={{ marginTop: 8 }}>
                {e.text}
              </p>
              <ul className="dots">
                {e.items.map((li) => (
                  <li key={li}>{li}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

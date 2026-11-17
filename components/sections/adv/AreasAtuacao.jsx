import Accordion from "../../ui/Accordion";
import { areas, etapas } from "../../../data/advocacia";

// Visual-Advocacia 113–135
export default function AreasAtuacao() {
  return (
    <section className="sec line-top" id="areas" aria-labelledby="areas-title">
      <div className="wrap grid items-start" style={{ "--min": "320px", "--gap": "56px" }}>
        <div style={{ maxWidth: 420 }}>
          <div className="eyebrow" aria-hidden="true">
            Áreas de atuação
          </div>
          <h2 id="areas-title">Áreas de atuação</h2>
          <ul className="chips" aria-label="Etapas da atuação">
            {etapas.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
          <a className="btn" href="#contato" style={{ marginTop: 32 }}>
            Fale com um especialista
          </a>
        </div>
        <Accordion items={areas} />
      </div>
    </section>
  );
}

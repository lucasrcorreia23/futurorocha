import Accordion from "../../ui/Accordion";
import { solucoes } from "../../../data/pi";

// Visual-PI 143–167
export default function SolucoesPI() {
  return (
    <section className="sec line-top" aria-labelledby="solucoes-title">
      <div className="wrap grid items-start" style={{ "--min": "320px", "--gap": "56px" }}>
        <div style={{ maxWidth: 420 }}>
          <div className="eyebrow">Soluções</div>
          <h2 id="solucoes-title">Soluções em propriedade intelectual</h2>
          <p className="muted" style={{ marginTop: 20 }}>
            Proteção, gestão e defesa de ativos intelectuais.
          </p>
          <a className="btn" href="#contato" style={{ marginTop: 32 }}>
            Fale com um especialista
          </a>
        </div>
        <Accordion items={solucoes} />
      </div>
    </section>
  );
}

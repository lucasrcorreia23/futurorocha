import Link from "next/link";
import Icon from "../../ui/Icon";
import { conflitos } from "../../../data/advocacia";

// Visual-Advocacia 174–192
export default function Conflitos() {
  return (
    <section
      className="sec"
      id="conflitos"
      style={{ background: "radial-gradient(50% 70% at 85% 50%,rgba(109,40,217,.18),rgba(7,7,13,0) 70%)" }}
      aria-labelledby="conflitos-title"
    >
      <div className="wrap grid items-center" style={{ "--min": "340px", "--gap": "56px" }}>
        <div>
          <div className="eyebrow">Quando o conflito exige atuação jurídica</div>
          <h2 id="conflitos-title">Da negociação ao processo judicial.</h2>
          <p className="muted" style={{ marginTop: 20 }}>
            Atuamos na prevenção, negociação e solução de conflitos, bem como em procedimentos administrativos e demandas
            judiciais envolvendo relações empresariais, civis, contratuais, digitais e de propriedade intelectual.
          </p>
          <a className="btn pri" href="#contato" style={{ marginTop: 32 }}>
            Falar sobre meu caso <Icon name="arrow" size={16} strokeWidth={2} />
          </a>
        </div>
        <ul className="chk-list grid" style={{ "--min": "230px", "--gap": "10px" }}>
          {conflitos.map((c) => (
            <li className="chk" key={c}>
              <Icon name="check" size={20} strokeWidth={1.8} />
              {c}
            </li>
          ))}
          <li className="chk accent">
            <Icon name="check" size={20} strokeWidth={1.8} />
            <span>
              Propriedade Intelectual · <Link href="/propriedade-intelectual">ver PI</Link>
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}

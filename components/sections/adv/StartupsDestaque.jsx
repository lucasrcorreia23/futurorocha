import Icon from "../../ui/Icon";
import { startups } from "../../../data/advocacia";

// Visual-Advocacia 137–160
export default function StartupsDestaque() {
  return (
    <section className="sec pt-40" aria-labelledby="startups-title">
      <div className="wrap">
        <div
          className="panel grid items-center"
          style={{
            "--min": "320px",
            "--gap": "48px",
            overflow: "hidden",
            background:
              "radial-gradient(70% 120% at 0% 0%,rgba(124,58,237,.24),rgba(7,7,13,0) 55%),linear-gradient(180deg,#100E1E,#0A0914)",
            boxShadow: "none",
          }}
        >
          <div>
            <div className="ico lg">
              <Icon name="rocket" />
            </div>
            <div className="eyebrow" style={{ marginTop: 28 }}>
              Destaque
            </div>
            <h2 id="startups-title">Startups, inovação e investimentos</h2>
            <p className="muted" style={{ marginTop: 18 }}>
              Estruturação jurídica para startups, projetos de inovação e operações de investimento.
            </p>
            <a className="btn pri" href="#contato" style={{ marginTop: 32 }}>
              Falar sobre meu projeto <Icon name="arrow" size={16} strokeWidth={2} />
            </a>
          </div>
          <ul className="chk-list grid" style={{ "--min": "220px", "--gap": "10px" }}>
            {startups.map((s) => (
              <li className="chk" key={s}>
                <Icon name="check" size={20} strokeWidth={1.8} />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

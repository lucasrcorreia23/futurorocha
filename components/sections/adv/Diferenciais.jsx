import Icon from "../../ui/Icon";
import { diferenciais } from "../../../data/advocacia";

// Visual-Advocacia 194–205
export default function Diferenciais() {
  return (
    <section className="sec line-top" aria-labelledby="diferenciais-title">
      <div className="wrap">
        <div className="head-row">
          <div>
            <div className="eyebrow">Diferenciais</div>
            <h2 id="diferenciais-title">Por que o Futuro Rocha?</h2>
          </div>
        </div>
        <div className="grid" style={{ "--min": "240px", "--gap": "16px" }}>
          {diferenciais.map((d) => (
            <div className="card hov" style={{ "--pad": "30px" }} key={d.title}>
              <div className="ico">
                <Icon name={d.icon} />
              </div>
              <h3 style={{ marginTop: 22 }}>{d.title}</h3>
              <p className="small" style={{ marginTop: 8 }}>
                {d.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Icon from "../../ui/Icon";
import { paraQuem } from "../../../data/advocacia";

// Visual-Advocacia 99–111
export default function ParaQuem() {
  return (
    <section className="sec pt-72" aria-labelledby="para-quem-title">
      <div className="wrap">
        <div className="head-row" style={{ marginBottom: 40 }}>
          <div style={{ maxWidth: 640 }}>
            <div className="eyebrow">Para quem atuamos</div>
            <h2 id="para-quem-title">Diferentes clientes. Diferentes necessidades jurídicas.</h2>
          </div>
        </div>
        <div className="grid" style={{ "--min": "200px", "--gap": "14px" }}>
          {paraQuem.map((p) => (
            <div className="card hov" style={{ "--pad": "26px" }} key={p.title}>
              <div className="ico">
                <Icon name={p.icon} />
              </div>
              <h3 style={{ marginTop: 22 }}>{p.title}</h3>
              <p className="small" style={{ marginTop: 8 }}>
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

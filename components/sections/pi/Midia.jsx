import Icon from "../../ui/Icon";
import { shorts } from "../../../data/pi";
import { social, track } from "../../../data/site";

// Visual-PI 246–260 (com as thumbs reais dos shorts)
export default function Midia() {
  return (
    <section className="sec pt-40" aria-labelledby="midia-title">
      <div className="wrap">
        <div className="head-row" style={{ marginBottom: 40 }}>
          <div style={{ maxWidth: 620 }}>
            <div className="eyebrow">Futuro Rocha na mídia</div>
            <h2 id="midia-title">Conhecimento jurídico em movimento</h2>
            <p className="muted" style={{ marginTop: 16 }}>
              Entrevistas, participações e orientações sobre PI, tecnologia e inovação.
            </p>
          </div>
          <a className="btn" href={social.youtube} target="_blank" rel="noopener noreferrer">
            <Icon name="youtube" size={18} />
            Acessar canal no YouTube
          </a>
        </div>
        <div className="grid" style={{ "--min": "150px", "--gap": "16px" }}>
          {shorts.map((s, i) => {
            const n = String(i + 1).padStart(2, "0");
            return (
              <a
                className="short"
                href={s.href}
                key={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Assistir short ${n} no YouTube (abre em nova aba)`}
                onClick={() => track("video_open", { video: `short_${n}` })}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.thumb} alt="" loading="lazy" />
                <span className="play">
                  <Icon name="play" size={22} />
                </span>
                <span className="tiny" style={{ letterSpacing: ".18em", textTransform: "uppercase", color: "#C4B5FD" }}>
                  Short · {n}
                </span>
                <span className="short-title">Assistir</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

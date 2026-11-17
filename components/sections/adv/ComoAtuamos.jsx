import { comoAtuamos } from "../../../data/advocacia";

const numStyle = {
  fontFamily: "var(--font-sora), sans-serif",
  fontSize: 48,
  fontWeight: 600,
  lineHeight: 1,
  background: "linear-gradient(180deg,#C4B5FD,#6D28D9)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
};

// Visual-Advocacia 162–172
export default function ComoAtuamos() {
  return (
    <section className="sec line-top" aria-labelledby="como-title">
      <div className="wrap">
        <div className="head-center">
          <div className="eyebrow">Método</div>
          <h2 id="como-title">Como atuamos</h2>
        </div>
        <ol className="grid" style={{ "--min": "280px", "--gap": "16px", listStyle: "none", margin: 0, padding: 0 }}>
          {comoAtuamos.map((c, i) => (
            <li className="card hov" style={{ "--pad": "36px" }} key={c.title}>
              <div style={numStyle} aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 style={{ marginTop: 28 }}>{c.title}</h3>
              <p className="small" style={{ marginTop: 10 }}>
                {c.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

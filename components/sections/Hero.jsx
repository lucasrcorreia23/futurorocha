import styles from "./Hero.module.scss";

/**
 * Hero das duas páginas (Visual-PI 82–96 / Visual-Advocacia 84–97).
 * - image: imagem de fundo opcional (enquanto o cliente não envia, o fundo fica só com gradientes/glow).
 * - variant "pi" desenha a grade com máscara; "adv" aplica o filtro de saturação na imagem.
 */
export default function Hero({ variant = "pi", eyebrow, title, lead, text, children, image }) {
  return (
    <section className={`${styles.hero} ${styles[variant]}`}>
      {image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={image} alt="" aria-hidden="true" className={styles.img} fetchpriority="high" />
      ) : (
        <div className={styles.glow} aria-hidden="true" />
      )}
      <div className={styles.shade} aria-hidden="true" />
      {variant === "pi" && <div className={styles.grid} aria-hidden="true" />}
      <div className={`wrap grid items-center ${styles.content}`} style={{ "--min": "340px", "--gap": "56px" }}>
        <div>
          <div className="eyebrow">{eyebrow}</div>
          <h1>{title}</h1>
          <p className="lead" style={{ marginTop: 24, fontWeight: 500 }}>
            {lead}
          </p>
          <p className="muted" style={{ marginTop: 16, maxWidth: variant === "pi" ? 540 : 560 }}>
            {text}
          </p>
          <div className="btns" style={{ marginTop: 36 }}>
            {children}
          </div>
        </div>
        <div aria-hidden="true" className="hide-sm" />
      </div>
    </section>
  );
}

import { images } from "../../data/site";
import styles from "./Logo.module.scss";

/**
 * Logo por marca.
 * - "pi": logotipo Futuro Rocha Propriedade Intelectual.
 * - "adv": enquanto o arquivo do logo Futuro Rocha Advogados não chega (images.logoAdv),
 *   usa um wordmark tipográfico no lugar.
 */
export default function Logo({ brand = "pi", height = 52, decorative = false }) {
  const alt = decorative ? "" : brand === "adv" ? "Futuro Rocha Advogados" : "Futuro Rocha Propriedade Intelectual";
  const src = brand === "adv" ? images.logoAdv : images.logoPi;

  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} style={{ height, width: "auto", display: "block" }} />;
  }

  return (
    <span className={styles.wordmark} style={{ fontSize: Math.round(height * 0.42) }} role={decorative ? undefined : "img"} aria-label={decorative ? undefined : alt} aria-hidden={decorative || undefined}>
      <span className={styles.name}>Futuro Rocha</span>
      <span className={styles.sub}>{brand === "adv" ? "Advogados" : "Propriedade Intelectual"}</span>
    </span>
  );
}

export function LogoCombined() {
  if (images.logoCombinado) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={images.logoCombinado} alt="Futuro Rocha Advogados e Futuro Rocha Propriedade Intelectual" style={{ width: 240, height: "auto", display: "block" }} />;
  }
  return (
    <div className={styles.combined} role="img" aria-label="Futuro Rocha Advogados e Futuro Rocha Propriedade Intelectual">
      <Logo brand="pi" height={48} decorative />
      <span className={styles.divider} aria-hidden="true" />
      <Logo brand="adv" height={48} decorative />
    </div>
  );
}

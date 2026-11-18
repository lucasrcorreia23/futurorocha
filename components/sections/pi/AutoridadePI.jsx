import Link from "next/link";
import ExternalLink from "../../ui/ExternalLink";
import FounderPhoto from "../FounderPhoto";
import { images, links, founder } from "../../../data/site";
import styles from "./AutoridadePI.module.scss";

// Visual-PI 203–229
export default function AutoridadePI() {
  return (
    <section
      className="sec"
      style={{ background: "radial-gradient(50% 60% at 15% 50%,rgba(109,40,217,.16),rgba(7,7,13,0) 70%)" }}
      aria-labelledby="autoridade-title"
    >
      <div className="wrap">
        <h2 id="autoridade-title" className="eyebrow">
          Autoridade em propriedade intelectual
        </h2>
        <div className="grid" style={{ "--min": "380px", "--gap": "20px", marginTop: 8 }}>
          <div className={`card ${styles.book}`} style={{ "--pad": "36px" }}>
            {images.livro ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={images.livro} alt="Capa do livro Contrafação de Marca, de Arno Ribeiro Rocha" className={styles.cover} />
            ) : (
              <div className={`${styles.cover} ${styles.coverFallback}`} role="img" aria-label="Capa do livro Contrafação de Marca, de Arno Ribeiro Rocha">
                <span className={styles.coverTitle}>Contrafação de Marca</span>
                <span className={styles.coverAuthor}>Arno Ribeiro Rocha</span>
              </div>
            )}
            <div style={{ flex: "1 1 220px" }}>
              <div className="kicker">Pesquisa também faz parte da nossa prática</div>
              <h3 className="h3-lg" style={{ marginTop: 14 }}>
                Contrafação de Marca
              </h3>
              <p className="small" style={{ marginTop: 12 }}>
                Obra que analisa os critérios de fixação de indenizações em casos de contrafação de marca, conectando propriedade
                intelectual, responsabilidade civil e reparação de danos.
              </p>
              <p className="tiny" style={{ marginTop: 10 }}>
                Editora Dialética · 2023
              </p>
              <ExternalLink href={links.livro} className="btn sm" style={{ marginTop: 22 }}>
                Conheça o livro
              </ExternalLink>
            </div>
          </div>

          <div className={`card ${styles.person}`}>
            <FounderPhoto className={styles.photo} />
            <div className={styles.personBody}>
              <div className="kicker">Formação e experiência em PI</div>
              <h3 className="h3-lg" style={{ marginTop: 14 }}>
                {founder.name}
              </h3>
              <p className="small" style={{ marginTop: 12 }}>
                Advogado, pesquisador e autor. Mestre em Propriedade Intelectual e Transferência de Tecnologia para Inovação pela
                UFSC, com mais de 15 anos de atuação jurídica.
              </p>
              <Link className="btn sm" href="/#fundador" style={{ marginTop: 22, alignSelf: "flex-start" }}>
                Conheça o fundador
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { LogoCombined } from "./Logo";
import ExternalLink from "../ui/ExternalLink";
import { site, social, links, track } from "../../data/site";
import styles from "./SiteFooter.module.scss";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.foot}>
      <div className="wrap">
        <div className="grid items-start" style={{ "--min": "220px", "--gap": "32px" }}>
          <div>
            <LogoCombined />
            <p className="tiny" style={{ marginTop: 16, maxWidth: 260 }}>
              {site.slogan}
            </p>
          </div>
          <div>
            <div className={`kicker ${styles.title}`}>Contato</div>
            <div className={`small ${styles.col}`}>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <span>{site.city}</span>
              <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={() => track("whatsapp_click", { origem: "footer" })}>
                WhatsApp
              </a>
            </div>
          </div>
          <div>
            <div className={`kicker ${styles.title}`}>Redes</div>
            <div className={`small ${styles.col}`}>
              <a href={social.youtube} target="_blank" rel="noopener noreferrer">YouTube</a>
              <a href={social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href={social.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>
          <div>
            <div className={`kicker ${styles.title}`}>Institucional</div>
            <div className={`small ${styles.col}`}>
              <ExternalLink href={links.privacidade} className="">Privacidade</ExternalLink>
              <ExternalLink href={links.termos} className="">Termos de Uso</ExternalLink>
            </div>
          </div>
        </div>
        <div className={`tiny ${styles.copy}`}>© {year} Futuro Rocha. Todos os direitos reservados.</div>
      </div>
    </footer>
  );
}

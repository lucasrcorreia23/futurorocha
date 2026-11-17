import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import Icon from "../ui/Icon";
import { track } from "../../data/site";
import styles from "./SiteHeader.module.scss";

/**
 * Cabeçalho comum às duas páginas.
 * O item ativo vem da marca (brand), não do pathname: em "/" a página exibida é a de PI.
 * standalone: páginas sem as seções #raio-x/#contato (ex.: 404) usam links absolutos.
 */
export default function SiteHeader({ brand = "pi", standalone = false }) {
  const [open, setOpen] = useState(false);
  const isPi = brand === "pi";
  const raioX = isPi && !standalone ? "#raio-x" : "/propriedade-intelectual#raio-x";
  const contato = standalone ? "/advocacia#contato" : "#contato";

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  const items = [
    { href: "/", label: "Início" },
    { href: "/advocacia", label: "Advocacia", active: !standalone && brand === "adv" },
    { href: "/propriedade-intelectual", label: "Propriedade Intelectual", active: !standalone && isPi },
    { href: raioX, label: "Raio X BLINVS" },
    { href: contato, label: "Contato" },
  ];

  return (
    <header className={`${styles.header} ${isPi ? styles.pi : styles.adv}`}>
      <div className={`wrap ${styles.inner}`}>
        <Link
          href={isPi ? "/" : "/advocacia"}
          aria-label={isPi ? "Futuro Rocha Propriedade Intelectual — início" : "Futuro Rocha Advogados — início"}
          className={styles.logo}
        >
          <Logo brand={brand} height={isPi ? 52 : 40} decorative />
        </Link>

        <button
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="menu-principal"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? "close" : "menu"} size={22} strokeWidth={2} />
        </button>

        <div id="menu-principal" className={`${styles.menu} ${open ? styles.open : ""}`}>
          <nav className={styles.nav} aria-label="Principal">
            {items.map((it) => (
              <NavLink
                key={it.label}
                href={it.href}
                className={it.active ? styles.on : undefined}
                aria-current={it.active ? "page" : undefined}
                onClick={close}
              >
                {it.label}
              </NavLink>
            ))}
          </nav>
          <NavLink
            className="btn sm outline-violet"
            href={raioX}
            onClick={() => {
              close();
              track("cta_click", { cta: "fazer_diagnostico_header" });
            }}
          >
            Fazer diagnóstico <Icon name="arrow" size={16} strokeWidth={2} />
          </NavLink>
        </div>
      </div>
    </header>
  );
}

// Âncoras da própria página ("#...") usam <a> simples: o next/link resolveria o hash
// contra a query string atual (ex.: ?assunto=pi), gerando diferença entre servidor e cliente.
function NavLink({ href, children, ...rest }) {
  if (href.startsWith("#")) {
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  );
}

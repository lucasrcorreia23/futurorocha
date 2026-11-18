import Head from "next/head";
import Link from "next/link";
import SiteHeader from "../components/layout/SiteHeader";
import SiteFooter from "../components/layout/SiteFooter";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Página não encontrada | Futuro Rocha</title>
        <meta name="robots" content="noindex" />
      </Head>
      <SiteHeader brand="pi" standalone />
      <main className="sec" style={{ minHeight: "50vh", display: "flex", alignItems: "center" }}>
        <div className="wrap">
          <div className="eyebrow">Erro 404</div>
          <h1>Página não encontrada.</h1>
          <p className="muted" style={{ marginTop: 16, maxWidth: 520 }}>
            O endereço pode ter mudado. Escolha uma das áreas abaixo para continuar.
          </p>
          <div className="btns" style={{ marginTop: 32 }}>
            <Link className="btn pri" href="/">Advocacia</Link>
            <Link className="btn" href="/propriedade-intelectual">Propriedade Intelectual</Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

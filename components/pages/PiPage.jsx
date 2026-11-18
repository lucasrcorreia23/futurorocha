import SiteHeader from "../layout/SiteHeader";
import SiteFooter from "../layout/SiteFooter";
import Seo from "../layout/Seo";
import Hero from "../sections/Hero";
import BlinvsRaioX from "../sections/pi/BlinvsRaioX";
import SolucoesPI from "../sections/pi/SolucoesPI";
import Expertises from "../sections/pi/Expertises";
import JornadaProtecao from "../sections/pi/JornadaProtecao";
import AutoridadePI from "../sections/pi/AutoridadePI";
import Depoimentos from "../sections/pi/Depoimentos";
import Midia from "../sections/pi/Midia";
import CtaFinalPI from "../sections/pi/CtaFinalPI";
import Icon from "../ui/Icon";
import { hero, solucoes } from "../../data/pi";
import { images, site, track } from "../../data/site";

const TITLE = "Propriedade Intelectual | Futuro Rocha — Marcas, Software, Direitos Autorais e Inovação";
const DESCRIPTION =
  "Proteção e gestão de marcas, software, direitos autorais, patentes e tecnologias. Faça o Raio X BLINVS gratuito e conheça os ativos de propriedade intelectual do seu negócio. Florianópolis/SC, atuação nacional.";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Propriedade Intelectual",
    provider: { "@type": "LegalService", name: "Futuro Rocha", url: site.url },
    areaServed: { "@type": "Country", name: "Brasil" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Soluções em propriedade intelectual",
      itemListElement: solucoes.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title, description: s.text },
      })),
    },
  },
];

// Página Propriedade Intelectual — renderizada em "/propriedade-intelectual".
export default function PiPage() {
  return (
    <>
      <Seo title={TITLE} description={DESCRIPTION} path="/propriedade-intelectual" jsonLd={jsonLd} />
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <SiteHeader brand="pi" />
      <main id="conteudo">
        <Hero variant="pi" image={images.heroPi} {...hero}>
          <a className="btn pri" href="#contato" onClick={() => track("cta_click", { cta: "conheca_seus_ativos" })}>
            Conheça seus ativos <Icon name="arrow" size={16} strokeWidth={2} />
          </a>
          <a className="btn" href="#raio-x" onClick={() => track("cta_click", { cta: "hero_raio_x" })}>
            Faça o Raio X BLINVS
          </a>
        </Hero>
        <BlinvsRaioX />
        <SolucoesPI />
        <Expertises />
        <JornadaProtecao />
        <AutoridadePI />
        <Depoimentos />
        <Midia />
        <CtaFinalPI />
      </main>
      <SiteFooter />
    </>
  );
}

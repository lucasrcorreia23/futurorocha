import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import SiteHeader from "../layout/SiteHeader";
import SiteFooter from "../layout/SiteFooter";
import Seo from "../layout/Seo";
import Hero from "../sections/Hero";
import ParaQuem from "../sections/adv/ParaQuem";
import AreasAtuacao from "../sections/adv/AreasAtuacao";
import StartupsDestaque from "../sections/adv/StartupsDestaque";
import ComoAtuamos from "../sections/adv/ComoAtuamos";
import Conflitos from "../sections/adv/Conflitos";
import Diferenciais from "../sections/adv/Diferenciais";
import Planos from "../sections/adv/Planos";
import QuemSomos from "../sections/adv/QuemSomos";
import ContatoAdv from "../sections/adv/ContatoAdv";
import Icon from "../ui/Icon";
import { hero, areas, assuntoQueryMap } from "../../data/advocacia";
import { images, site, track } from "../../data/site";

const TITLE = "Advocacia empresarial, civil e digital | Futuro Rocha Advogados";
const DESCRIPTION =
  "Advocacia empresarial, societária, contratual, civil, digital e de proteção de dados (LGPD). Assessoria para empresas, sócios, profissionais e startups, da estruturação à defesa em conflitos. Florianópolis/SC.";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Advocacia empresarial, civil e digital",
    provider: { "@type": "LegalService", name: "Futuro Rocha", url: site.url },
    areaServed: { "@type": "Country", name: "Brasil" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Áreas de atuação",
      itemListElement: areas.map((a) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: a.title, description: a.text },
      })),
    },
  },
];

export default function AdvocaciaPage() {
  const router = useRouter();
  const [assunto, setAssunto] = useState("Advocacia");
  const [mensagemInicial, setMensagemInicial] = useState("");

  // ?assunto=pi (vindo do CTA da página de PI) pré-seleciona o assunto do formulário.
  // Em páginas estáticas a query só existe depois que o router fica pronto.
  useEffect(() => {
    if (!router.isReady) return;
    const q = router.query.assunto;
    const mapped = typeof q === "string" && assuntoQueryMap[q.toLowerCase()];
    if (mapped) setAssunto(mapped);
  }, [router.isReady, router.query.assunto]);

  const chooseAssunto = (value, mensagem = "") => {
    setAssunto(value);
    if (mensagem) setMensagemInicial(mensagem);
  };

  return (
    <>
      <Seo title={TITLE} description={DESCRIPTION} path="/" jsonLd={jsonLd} />
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <SiteHeader brand="adv" />
      <main id="conteudo">
        <Hero variant="adv" image={images.heroAdv} {...hero}>
          <a className="btn pri" href="#contato" onClick={() => track("cta_click", { cta: "solicite_atendimento" })}>
            Solicite atendimento <Icon name="arrow" size={16} strokeWidth={2} />
          </a>
          <a className="btn" href="#areas">
            Ver áreas de atuação
          </a>
        </Hero>
        <ParaQuem />
        <AreasAtuacao />
        <StartupsDestaque />
        <ComoAtuamos />
        <Conflitos />
        <Diferenciais />
        <Planos onChooseAssunto={chooseAssunto} />
        <QuemSomos onChooseAssunto={chooseAssunto} />
        <ContatoAdv assunto={assunto} onAssuntoChange={setAssunto} mensagemInicial={mensagemInicial} />
      </main>
      <SiteFooter />
    </>
  );
}

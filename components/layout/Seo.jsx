import Head from "next/head";
import { site, social } from "../../data/site";

const OG_IMAGE = `${site.url}/img/site/og-image.jpg`;
const LOGO = `${site.url}/img/site/logo-pi.png`;

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Futuro Rocha",
  description: "Advocacia empresarial, civil e digital e soluções em propriedade intelectual.",
  url: site.url,
  logo: LOGO,
  image: OG_IMAGE,
  email: site.email,
  telephone: `+${site.whatsappNumber}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Florianópolis",
    addressRegion: "SC",
    addressCountry: "BR",
  },
  areaServed: { "@type": "Country", name: "Brasil" },
  founder: {
    "@type": "Person",
    name: "Arno Ribeiro Rocha",
    jobTitle: "Advogado, pesquisador e autor",
  },
  sameAs: [social.linkedin, social.youtube, social.instagram],
};

/**
 * Metadados por página.
 * @param {string} path  caminho canônico (ex.: "/" ou "/advocacia")
 * @param {object[]} jsonLd  blocos JSON-LD adicionais da página
 */
export default function Seo({ title, description, path = "/", jsonLd = [] }) {
  const url = `${site.url}${path === "/" ? "/" : path}`;
  const blocks = [organizationJsonLd, ...jsonLd];
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="Futuro Rocha" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />
      {blocks.map((b, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(b) }} />
      ))}
    </Head>
  );
}

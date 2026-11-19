// Configuração central do site: contatos, URLs externas, redes e integrações.
// Itens marcados com TODO dependem de confirmação/envio pelo cliente.

// Número oficial confirmado pelo cliente: (48) 98840-5715.
const WHATSAPP_NUMBER = "5548988405715";

export const site = {
  name: "Futuro Rocha",
  url: "https://www.futurorocha.com.br",
  slogan: "Direito. Tecnologia. Negócios. Para o seu futuro.",
  email: "contato@futurorocha.com.br",
  city: "Florianópolis · SC",
  phoneDisplay: "+55 48 98840-5715",
  whatsappNumber: WHATSAPP_NUMBER,
  whatsappUrl: `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}`,
  whatsappUrlWithText: (text) =>
    `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(text)}`,
};

export const social = {
  youtube: "https://www.youtube.com/@futurorocha",
  linkedin: "https://www.linkedin.com/company/futurorocha",
  instagram: "https://www.instagram.com/futurorocha",
  facebook: "https://www.facebook.com/profile.php?id=100092284283133",
};

export const links = {
  raioX: "https://blinvs.com.br/#comecar",
  blinvs: "https://blinvs.com.br/",
  livro:
    "https://loja.editoradialetica.com/humanidades/contrafacao-de-marca-analise-jurisprudencial-acerca-dos-criterios-de-fixacao-do-quantum-indenizatorio-em-consonancia-co?utm_source=futurorocha&utm_medium=site&utm_campaign=livro",
  // TODO(cliente): versão final do vídeo BLINVS (hoje no Google Drive).
  videoBlinvs: "https://drive.google.com/file/d/1nJ4RH282Kh7trs01WaXph1GVHKiu6V-m/view?usp=sharing",
  videoInstitucionalId: "UcP1qHN-ePg",
  // TODO(cliente): textos de Política de Privacidade e Termos de Uso (cliente vai enviar).
  privacidade: null,
  termos: null,
};

export const analytics = {
  ga4: "G-KK8NV0W3NW",
  gtm: "GTM-T2498J63",
  metaPixel: "1997358960948947",
};


export const images = {
  // Imagens exportadas da proposta visual (artefato "Wireframe Futuro Rocha — ADV e PI").
  logoPi: "/img/site/logo-pi.png",
  logoAdv: "/img/site/logo-adv.png",
  logoCombinado: "/img/site/logo-combinado.png",
  arno: "/img/site/arno.webp",
  livro: "/img/site/livro.webp",
  heroPi: "/img/site/hero-pi.webp",
  heroAdv: "/img/site/hero-adv.webp",
  planosBg: "/img/site/planos-bg.webp",
  ctaPiBg: "/img/site/cta-pi-bg.webp",
};

export const founder = {
  name: "Arno Ribeiro Rocha",
  role: "Advogado, pesquisador e autor",
};

// Envia um evento ao GTM/GA4 sem quebrar caso o dataLayer não exista.
export function track(event, params = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}

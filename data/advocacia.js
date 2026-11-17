// Conteúdo da página Advocacia — fonte: docs/design/Visual-Advocacia.dc.html

export const hero = {
  eyebrow: "Futuro Rocha ADV",
  title: "Advocacia empresarial, civil e digital.",
  lead: "Da estruturação das relações à defesa em conflitos.",
  text: "Assessoramos empresas, empresários, sócios e profissionais, bem como projetos e novos empreendimentos, na estruturação de relações jurídicas, contratos e prevenção de riscos. Representamos nossos clientes em negociações, procedimentos administrativos e demandas judiciais.",
};

export const paraQuem = [
  { icon: "building", title: "Empresas", text: "Assessoria jurídica para a operação, contratos, crescimento e solução de conflitos." },
  { icon: "users", title: "Empresários e sócios", text: "Segurança jurídica nas relações societárias, negociações e decisões empresariais." },
  { icon: "user", title: "Profissionais", text: "Contratos, responsabilidade, imagem, conteúdo e proteção de direitos e ativos." },
  { icon: "rocket", title: "Startups e novos negócios", text: "Estruturação jurídica desde as primeiras decisões até o crescimento da operação." },
  { icon: "box", title: "Projetos", text: "Estruturação de relações, contratos e proteção jurídica conforme as características de cada iniciativa." },
];

export const etapas = ["Estruturar", "Contratar", "Proteger", "Prevenir", "Resolver", "Defender"];

export const areas = [
  {
    title: "Direito Empresarial e Societário",
    text: "Estruturação de relações empresariais e societárias, reorganizações e conflitos.",
    items: [
      "Planejamento e organização societária",
      "Acordos de sócios e quotistas",
      "Entrada e saída de sócios, reorganizações",
      "Negociações e conflitos societários",
    ],
  },
  {
    title: "Contratos",
    text: "Elaboração, revisão, negociação e acompanhamento de relações contratuais.",
    items: [
      "Contratos civis, empresariais e tecnológicos",
      "Prestação de serviços e parcerias",
      "Revisão e negociação contratual",
      "Inadimplemento e encerramento de relações contratuais",
    ],
  },
  {
    title: "Direito Civil e Obrigações",
    text: "Atuação em obrigações, relações patrimoniais, cobranças e conflitos privados.",
    items: ["Cobranças e obrigações", "Relações patrimoniais", "Conflitos decorrentes de relações privadas"],
  },
  {
    title: "Responsabilidade Civil e Indenizações",
    text: "Atuação em demandas envolvendo responsabilidade, reparação de danos e defesa.",
    items: [
      "Responsabilidade civil empresarial",
      "Responsabilidade civil digital e por sistemas automatizados",
      "Pedidos e defesa em indenizações",
      "Defesa em ações de responsabilidade civil",
    ],
  },
  {
    title: "Direito Digital",
    text: "Plataformas, perfis, conteúdo, imagem, software e fraudes.",
    items: [
      "Marco Civil da Internet",
      "Remoção de conteúdo e perfis falsos",
      "Recuperação de contas empresariais",
      "Ações de obrigação de fazer contra plataformas",
      "Cumprimento de sentença contra big techs",
      "Termos de uso, políticas e compliance digital",
    ],
  },
  {
    title: "Privacidade e Proteção de Dados",
    text: "LGPD, políticas, contratos, incidentes e conflitos.",
    items: [
      "Programas de adequação à LGPD",
      "DPO as a Service",
      "Auditoria de conformidade e relatórios de impacto (DPIA)",
      "Políticas de privacidade, cookies e cláusulas de dados",
      "Gestão de incidentes e vazamento de dados",
      "Treinamentos corporativos",
      "Defesa em ações judiciais e administrativas",
    ],
  },
  {
    title: "Relações de Consumo",
    text: "Atuação preventiva, administrativa e judicial.",
    items: [
      "Orientação preventiva",
      "Reclamações e procedimentos administrativos",
      "Negociação de conflitos",
      "Ações judiciais e defesa de fornecedores",
    ],
  },
  {
    title: "Contencioso e Solução de Conflitos",
    text: "Atuação estratégica na prevenção, negociação e condução de conflitos administrativos e judiciais.",
    items: [
      "Negociações e soluções extrajudiciais",
      "Notificações e contranotificações",
      "Ações judiciais, defesas, recursos e medidas de urgência",
      "Cumprimento de sentença e decisões judiciais",
    ],
  },
];

export const startups = [
  "Modelagem jurídica de startups",
  "Acordo de sócios (vesting, cliff, lock-up)",
  "SAFE, mútuo conversível e instrumentos híbridos",
  "Term Sheet para investimento",
  "Planejamento societário para rodadas",
  "Cap table e governança",
  "Estruturação de SPEs e spin-offs",
  "Assessoria jurídica a fundadores",
];

export const comoAtuamos = [
  { title: "Consultivo e preventivo", text: "Estruturação jurídica, contratos, análise de riscos e orientação para decisões e relações do negócio." },
  { title: "Extrajudicial e negociação", text: "Negociações, notificações, contranotificações, composição de conflitos e formalização de acordos." },
  { title: "Administrativo e judicial", text: "Representação em procedimentos administrativos, ações judiciais, defesas, recursos e cumprimento de decisões." },
];

export const conflitos = [
  "Contratos e inadimplemento",
  "Cobranças e obrigações",
  "Responsabilidade civil e indenizações",
  "Conflitos empresariais e societários",
  "Plataformas e ambiente digital",
];

export const diferenciais = [
  { icon: "layers", title: "Visão jurídica integrada", text: "Relações, contratos, riscos e ativos analisados em conjunto." },
  { icon: "award", title: "Especialização jurídica", text: "Experiência em Direito Empresarial, PI, contratos e tecnologia." },
  { icon: "scale", title: "Consultivo e contencioso", text: "Da prevenção e negociação à atuação administrativa e judicial." },
  { icon: "network", title: "Demandas complexas", text: "Atuação em questões que envolvem diferentes áreas do Direito." },
];

// Sem preços, horas, bônus ou itens "ilimitados" (orientação do cliente).
export const planos = [
  {
    icon: "origem",
    title: "Origem",
    tag: "Estruturação inicial",
    text: "Primeiras prioridades jurídicas, relações entre participantes, contratos essenciais e proteção de ativos.",
  },
  {
    icon: "orbita",
    title: "Órbita",
    tag: "Organização da operação",
    text: "Demandas recorrentes, contratos e relações empresariais ou societárias.",
  },
  {
    icon: "vetor",
    title: "Vetor",
    tag: "Crescimento e estruturação",
    text: "Novas decisões, negociações, mudanças societárias e proteção de ativos",
  },
  {
    icon: "space",
    title: "Space",
    tag: "Operações de maior complexidade",
    text: "Acompanhamento mais próximo de demandas simultâneas e de maior complexidade.",
    featured: true,
  },
];

export const planosEtapas = [
  { title: "Diagnóstico", text: "Compreendemos o momento, o contexto e as necessidades." },
  { title: "Definição de escopo", text: "Definimos atividades, prioridades, disponibilidade e condições." },
  { title: "Acompanhamento", text: "Organizamos a rotina de atendimento e os encaminhamentos." },
];

export const formacao = [
  "Mestrado em Propriedade Intelectual e Transferência de Tecnologia para Inovação — UFSC",
  "MBA Internacional em Gestão Executiva — Faculdade Damásio",
  "Formação em Direito para Startups — FGV",
  "Graduação em Direito — IPA",
];

export const assuntos = [
  "Advocacia",
  "Propriedade Intelectual",
  "Contratos",
  "Ação ou conflito judicial",
  "Planos de assessoria",
  "Parcerias profissionais",
  "Outros",
];

// Mapeia ?assunto= da URL para uma opção do formulário.
export const assuntoQueryMap = {
  pi: "Propriedade Intelectual",
  adv: "Advocacia",
  planos: "Planos de assessoria",
  parcerias: "Parcerias profissionais",
};

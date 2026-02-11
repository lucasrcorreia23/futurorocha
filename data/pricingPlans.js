export const pricingMeta = {
  cycle: "Ciclo: 6 a 12 meses",
  observation:
    "As entregas podem ser priorizadas e ajustadas conforme as características e necessidades do negócio, dentro do limite de horas contratadas.",
};

export const pricingPlans = [
  {
    id: "origem",
    name: "PLANO ORIGEM",
    type: "BASE LEGAL",
    price: "R$ 500/mês",
    description:
      "A fundação jurídica essencial para startups em fase de ideação e formalização de novos negócios.",
    deliveries: [
      "Consultoria Estratégica: 2h mensais com reuniões quinzenais de alinhamento.",
      "Arquitetura Societária: Estruturação de CNPJ, atos constitutivos e acordo de sócios.",
      "Gestão de Contratos: Elaboração mensal de documentos vitais (NDAs e comerciais).",
      "Proteção de Marca: 1 protocolo de registro anual incluído no ecossistema.",
      "Segurança de Dados: Diagnóstico inicial e políticas de privacidade essenciais (LGPD).",
      "Bônus: Check-list jurídico de validação da empresa.",
    ],
    bonus: "Inclui Check-list Jurídico de Validação.",
  },
  {
    id: "orbita",
    name: "PLANO ÓRBITA",
    type: "ESTRUTURA JURÍDICA",
    price: "R$ 1.000/mês",
    description:
      "Segurança e suporte jurídico contínuo para startups em operação que buscam estabilidade e conformidade.",
    deliveries: [
      "Consultoria em Operação: 5h mensais com acompanhamento semanal dedicado.",
      "Evolução Societária: Adequação de contrato social e acordo de sócios personalizado.",
      "Portfólio de Ativos: 1 protocolo de marca e 1 de software incluídos ao ano.",
      "Privacidade Avançada: Mapeamento completo e políticas de privacidade exclusivas.",
      "Consultoria de Capital Humano: Orientações sobre regimes de contratação (PJ, MEI, CLT).",
    ],
    bonus: "Diagnóstico gratuito de marca (INPI).",
  },
  {
    id: "vetor",
    name: "PLANO VETOR",
    type: "BASE LEGAL",
    price: "R$ 1.500/mês",
    description:
      "Direcionamento estratégico para startups em tração que visam escala, governança e rodadas de investimento.",
    deliveries: [
      "Consultoria de Alta Performance: 8h mensais com reuniões semanais e suporte prioritário.",
      "Engenharia Societária: Reestruturação para entrada/saída de sócios e acordos complexos.",
      "Blindagem de Ativos: 2 protocolos de marca e 1 de software incluídos ao ano.",
      "Segurança em Investimentos: Análise jurídica de contratos e cláusulas de confidencialidade.",
      "Governança e Report: Relatório jurídico mensal e mentoria trimestral de gestão.",
    ],
    bonus: "Checklist jurídico de validação para rodadas de investimento.",
  },
  {
    id: "space",
    name: "PLANO SPACE",
    type: "ESTRUTURA JURÍDICA",
    price: "R$ 3.500/mês",
    description:
      "Consultoria de alta complexidade para startups em fase de captação, governança avançada e expansão internacional.",
    deliveries: [
      "Assessoria Executiva: 12h mensais com pauta estratégica e suporte preferencial.",
      "Planejamento Societário: Estruturação avançada incluindo Holding, Vesting e M&A.",
      "Gestão Total de Ativos: Fluxo ilimitado de contratos estratégicos e gestão de IP.",
      "Compliance e LGPD: Implantação integral de conformidade corporativa e dados.",
      "Due Diligence e Board: Acompanhamento técnico em rodadas e mentoria mensal.",
    ],
    bonus:
      "Assento no Board de Startups Futuro Rocha e reunião trimestral com o CEO Jurídico.",
  },
];

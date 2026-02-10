import React from "react";
import DsnGrid from "../../layout/DsnGrid";
import TitleSection from "../heading/TitleSection";
import { dsnCN } from "../../hooks/helper";
import { pricingMeta, pricingPlans } from "../../data/pricingPlans";

const PricingPlans: React.FC = () => {
  return (
    <section
      className="container section-margin"
      data-dsn-title="Planos mensais"
    >
      <DsnGrid col={2} colTablet={1} className="mb-50">
        <div className="box-left">
          <TitleSection
            className="second-title mb-15"
            description={"ASSESSORIA JURÍDICA RECORRENTE"}
          >
            Planos Futuro Rocha
          </TitleSection>
          <p className=" sub-headingmax-w570 dsn-up">{pricingMeta.cycle}</p>
        </div>
        <div className="box-right justify-content-end d-flex flex-column">
          <p className="max-w570 dsn-up mb-15">
            Modelo de jurídico estratégico contínuo pensado para Startups,
            estúdios criativos e negócios inovadores que precisam de suporte
            recorrente em contratos, governança e proteção de ativos
            intangíveis.
          </p>
          <p className="max-w570 dsn-up">
            Escolha o plano que melhor se conecta ao estágio da sua empresa e
            ao nível de estruturação e blindagem jurídica que você precisa.
          </p>
        </div>
      </DsnGrid>

      <div className="pricing-plans">
        <DsnGrid
          col={2}
          colTablet={1}
          colMobile={1}
          colGap={30}
          rowGap={30}
        >
          {pricingPlans.map((plan) => (
            <div key={plan.id} className="services-item p-relative grid-item">
              <div className="services-item-inner">
                <div
                  className={dsnCN("services-content", "background-section")}
                >
                  <div className="service-description">
                    <p className="sub-heading mb-10">
                      <span className="line-bg-right">{plan.type}</span>
                    </p>
                    <h4 className="title-block service-title">{plan.name}</h4>

                    <h2 className="mb-10">
                      <strong>{plan.price}</strong>
                    </h2>
                    <p className="mb-10">{plan.hours}</p>
                    <p className="mb-10">{plan.meetings}</p>
                    <p className="mb-15">
                      <strong>Foco:</strong> {plan.focus}
                    </p>

                    <ul className="pricing-deliveries">
                      {plan.deliveries.map((item: string, index: number) => (
                        <li key={index} className="pricing-delivery-item">
                          <span className="pricing-delivery-bullet">●</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <p className="mt-15">{plan.support}</p>
                    <p className="mt-5">{plan.bonus}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </DsnGrid>

        <p className="max-w500 mx-auto p-50 bg-section text-center dsn-up mt-10">
          {pricingMeta.observation}
        </p>
      </div>
    </section>
  );
};

export default PricingPlans;


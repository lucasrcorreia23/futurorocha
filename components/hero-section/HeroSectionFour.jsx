import React from 'react'

import DsnGrid from "../../layout/DsnGrid";
import ParallaxImage from "../Image/ParallaxImage";
import {dsnCN} from "../../hooks/helper";

import TitleSection from "../heading/TitleSection";
import TitleCover from "../heading/TitleCover";
import Button from '../button/Button';


const heroData = {
    titleCover: `VALUATION`,
    title: `Valuation de Ativos Intangíveis.`,
    descTitle: `Impacto no negócio`,
    subtitle: `Transforme inovação em valor real de mercado.`,
    description: `Na nova economia, o valor de uma empresa reside em seu capital intelectual. Realizamos a valoração técnica de softwares, algoritmos de IA, games e direitos autorais, oferecendo a base necessária para rodadas de investimento, fusões e aquisições (M&A).`,
    descriptionTow: `Mais do que uma análise financeira, entregamos uma ferramenta estratégica para maximizar o potencial de ativos e garantir segurança jurídica em negociações complexas e disputas judiciais de alta complexidade.`,
    link: {
        href: "/services"
    },
    textButton: `View More <span>⟶</span>`,
    img: {src: "/img/futurorocha/valuation.jpg", alt: ""},
    social: {
        title: `Social <br/>Media`,
        links: [{url: "#0", title: "FB"}, {url: "#0", title: "TW"}, {url: "#0", title: "LN"},]
    }

};


function HeroSectionFour({className}) {


    return (
        <DsnGrid className={dsnCN("box-gallery-vertical box-gallery-content", className)} col={2} colTablet={1} colGap={0} rowGap={0}>
            <div className="p-relative box-content order-md-2">
                <div className="box-info h-100 box-padding background-section ">
                    <div className="box-info-inner">
                        <TitleCover>{heroData.titleCover}</TitleCover>
                        <TitleSection description={heroData.descTitle} defaultSpace={false}>
                            <span dangerouslySetInnerHTML={{__html: heroData.title}}/>
                        </TitleSection>
                        <h6 className="pb-30 mb-30 mt-30 border-bottom sm-title-block theme-color">
                            {heroData.subtitle}
                        </h6>
                        <p className="max-w570 dsn-up mb-10 ">{heroData.description}</p>
                        <p className="max-w570 dsn-up">{heroData.descriptionTow}</p>

                        <div className="border-bottom mt-30 mb-30"/>

                        <div className="d-flex  align-items-center">
                        <Button
      
                            href={"https://api.whatsapp.com/send?phone=554888405715"}
                            className="mr-15 line-head"
                            borderStyle={"border-color-heading-color"}
                            borderRadius
                          
                        >
                           Fale conosco agora
                        </Button>
                        </div>


                    </div>
                </div>
            </div>
            <div className="p-relative box-img order-md-1">
                <ParallaxImage {...heroData.img} fill height={"100%"} heightTable="70vh" sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"/>
            </div>
        </DsnGrid>
    )
}


export default HeroSectionFour;
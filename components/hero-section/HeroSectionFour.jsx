import React from 'react'

import DsnGrid from "../../layout/DsnGrid";
import ParallaxImage from "../Image/ParallaxImage";
import {dsnCN} from "../../hooks/helper";

import TitleSection from "../heading/TitleSection";
import TitleCover from "../heading/TitleCover";
import Button from '../button/Button';


const heroData = {
    titleCover: `VALUATION`,
    title: `Valuation`,
    descTitle: `Impacto no negócio`,
    subtitle: `Descubra como a sua marca pode impulsionar o seu negócio!`,
    description: `Uma marca forte e protegida não apenas agrega valor ao seu negócio, mas também se torna um ativo estratégico fundamental para o crescimento e sucesso a longo prazo.`,
    descriptionTow: `Na Futuro Rocha, estamos aqui para ajudá-lo a maximizar o potencial da sua marca e garantir sua posição competitiva no mercado.`,
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
                            href={"https://api.whatsapp.com/send?phone=5548988275155"}
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
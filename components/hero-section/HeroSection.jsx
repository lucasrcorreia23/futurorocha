import React from 'react'

import DsnGrid from "../../layout/DsnGrid";
import ParallaxImage from "../Image/ParallaxImage";
import {dsnCN} from "../../hooks/helper";
import MoveTrigger from "../../animation/MoveTrigger";
import FadeUpTrigger from "../../animation/FadeUpTrigger";
import Button from '../button/Button';

const HeroContent = {
    title: "Quem somos?",
    subtitle: ``,
    description: `Sob a liderança do Dr. Arno Ribeiro Rocha — Mestre em Propriedade Intelectual e autor da obra de referência "Contrafação de Marca" — a Futuro Rocha transcende o registro burocrático para atuar na arquitetura jurídica de negócios disruptivos. Unimos mais de uma década de experiência prática à dinâmica da nova economia, transformando o Direito em uma ferramenta de monetização e vantagem competitiva para nossos parceiros.<br/><br/>
    Em nosso ecossistema, conectamos alta precisão técnica à agilidade necessária para blindar o capital intelectual de empresas, investidores e criadores. Nossa missão é oferecer suporte integral em todo o ciclo de vida dos ativos, garantindo que a inteligência estratégica e a segurança jurídica sejam os motores de crescimento e valorização real dos ativos de cada cliente.
    `,
    authorTitle: "SALVADOR DALI",
    authorJob: "Digital Artisit",
    experienceNumber: "25",
    experienceDescription: `YEARS OF \nDIGITAL EXPERIENCE`,
    heroImage: '/img/futurorocha/exemplarsection.jpg',
    awards: [
        {number: 37, description: `Business <br/> partner`},
        {number: 19, description: `SUTISFIED <br/> CUSTOMERS`},
    ]
};


function HeroSection({className, ...restProps}) {


    return (
        <section className={dsnCN(`about-section p-relative`, className)} {...restProps}>
            <DsnGrid col={2} colTablet={1} colGap={50} rowGap={200}>
                <div className="box-info pt-60 pb-60">
                    <MoveTrigger from={{y: 0}} to={{y: -70}} tablet={false} mobile={false}>
                        {(ref) => <h2 className="section-title title-move mb-30 text-uppercase"
                                      dangerouslySetInnerHTML={{__html: HeroContent.title}} ref={ref}/>}
                    </MoveTrigger>
                    <FadeUpTrigger>
                        {(ref) => <>
                            
                            <p className="mb-30  pb-30 mt-30" ref={ref} style={{maxWidth: 570}} dangerouslySetInnerHTML={{__html: HeroContent.description}}/>
                            
                           
                        </>}
                        
                    </FadeUpTrigger>
                    <div className="d-flex justify-content-end align-items-center">
                        <Button
                            href={"https://api.whatsapp.com/send?phone=554888405715"}
                            className="mr-15 line-head"
                            borderStyle={"border-color-heading-color"}
                            borderRadius
                            target={"_blank"}
                          
                        >
                            REQUISITAR ANÁLISE ESTRATÉGICA
                        </Button>
                        </div>


                </div>
               
                

                <div className="background-mask p-relative over-hidden">
                    <div className="p-absolute p-20 h-100 w-100">
                        <div className="line line-top"/>
                        <div className="line line-bottom"/>
                        <div className="line line-left"/>
                        <div className="line line-right"/>

                        <div className="img-box h-100">
                            <ParallaxImage src={HeroContent.heroImage} alt={"about"} className={"cover-fixed"} height="100%" overlay={2}
                                           sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"/>
                        </div>


                        
                    </div>
                </div>
            </DsnGrid>
        </section>
    )
}


export default HeroSection;
import React from 'react'

import DsnGrid from "../../layout/DsnGrid";
import ParallaxImage from "../Image/ParallaxImage";
import {dsnCN} from "../../hooks/helper";
import MoveTrigger from "../../animation/MoveTrigger";
import FadeUpTrigger from "../../animation/FadeUpTrigger";
import Button from '../button/Button';

const HeroContent = {
    title: "Fundador:<br/> <i><a target='_blank' href='https://www.linkedin.com/in/arno-ribeiro-rocha-84989232/'>Arno Ribeiro Rocha</a></i>",
    subtitle: ``,
    description: `À frente do escritório Futuro Rocha está o Advogado e Mestre em Propriedade Intelectual, Dr. Arno Ribeiro Rocha. Sua trajetória é marcada pela experiência e anos de atuação, sendo também o autor do notável livro "Contrafação de Marca", consolidando sua posição como uma autoridade na área.<br/><br/>
    Descubra o universo da contrafação de marcas com nosso livro, que oferece insights valiosos sobre as decisões do Tribunal de Justiça de Santa Catarina. Com contribuições de renomados especialistas, este livro é uma leitura essencial para entender os desafios e nuances da proteção de marcas.
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
                            href={"https://www.amazon.com.br/Contrafa%C3%A7%C3%A3o-marca-jurisprudencial-indenizat%C3%B3rio-jurisprud%C3%AAncia/dp/6525293812/ref=sr_1_1?crid=2W7MNALYOE6FK&dib=eyJ2IjoiMSJ9.-rg6KYQ47d_llUXXMZWSZA.XH2ZWwTAxu64FbJeOZrtoeCBkN4nKMfbvhdobDq222c&dib_tag=se&keywords=arno+ribeiro+rocha&qid=1715980297&sprefix=%2Caps%2C194&sr=8-1"}
                            className="mr-15 line-head"
                            borderStyle={"border-color-heading-color"}
                            borderRadius
                            target={"_blank"}
                          
                        >
                            Adquira o seu exemplar agora
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
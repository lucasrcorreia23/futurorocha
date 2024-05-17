import React from 'react'
import DsnGrid from "../../layout/DsnGrid";
import ParallaxImage from "../Image/ParallaxImage";
import TitleSection from "../heading/TitleSection";
import Button from "../button/Button";
import ButtonPopup from "../button-popup/ButtonPopup";


const heroData = {
    title: `We help to create visual strategies`,
    descTitle: `capabilities our company`,
    subtitle: `The Best Choice For Your Successful Business!`,
    description: `We always stay with our clients and respect their business. We deliver 100% and provide instant response.`,
    descriptionTow: `Our clients describe us as a product team which
                        creates amazing UI/UX experiences, by crafting top-notch user
                        experience.`,
    heroImage: '/img/about-intro.jpg',
    
    link: {
        href: "/services"
    },
    textButton: `View More <span>⟶</span>`,
    img: {src: "/img/futurorocha/story1.jpg", alt: ""},
    img2: {src: "/img/futurorocha/story2.jpg", alt: ""},
    img3: {src: "/img/futurorocha/story1.jpg", alt: ""},
    img4: {src: "/img/futurorocha/story2.jpg", alt: ""},
    video: {
        href: "https://www.youtube.com/watch?v=D48T0wNm96w",
        textBefore: "Iniciar",
        textAfter: "Vídeo",

    }
};


function HeroSectionThree({className, ...restProps}) {


    return (
      
           
        <DsnGrid className="video-section p-relative" col={4} colTablet={1} rowGap={0} {...restProps}>
            

            <div className="video-inner p-relative h-full v-dark-head">
                <ParallaxImage {...heroData.img} height={""} overlay={2} className={"cover-fixed"} sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"/>
                <ButtonPopup className={"v-middle"} {...heroData.video} />
            </div>
            <div className="video-inner p-relative h-full v-dark-head">
                <ParallaxImage {...heroData.img2} height={""} overlay={2} className={"cover-fixed"} sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"/>
                <ButtonPopup className={"v-middle"} {...heroData.video} />
            </div>
            <div className="video-inner p-relative h-full v-dark-head">
                <ParallaxImage {...heroData.img3} height={""} overlay={2} className={"cover-fixed"} sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"/>
                <ButtonPopup className={"v-middle"} {...heroData.video} />
            </div>
            <div className="video-inner p-relative h-full v-dark-head">
                <ParallaxImage {...heroData.img4} height={""} overlay={2} className={"cover-fixed"} sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"/>
                <ButtonPopup className={"v-middle"} {...heroData.video} />
            </div>
            

        </DsnGrid>
    )
}


export default HeroSectionThree;
import React from 'react'
import DsnGrid from "../../layout/DsnGrid";
import ParallaxImage from "../Image/ParallaxImage";
import ButtonPopup from "/components/button-popup/ButtonPopup";
import Button from '../button/Button';

const heroData = {
    
   
    img: {src: "/img/futurorocha/shorts/1.png", alt: ""},
    img2: {src: "/img/futurorocha/shorts/2.png", alt: ""},
    img3: {src: "/img/futurorocha/shorts/3.png", alt: ""},
    img4: {src: "/img/futurorocha/shorts/4.png", alt: ""},
    video: {
        href: "https://youtube.com/shorts/So8qnnPl5jU?si=0ateVbuXcb9tQZa0",
        textBefore: "Iniciar",
        textAfter: "Vídeo",

    },
    video2: {
        href: "https://youtube.com/shorts/pAMeb4USw28?si=d9_RqnCsQAepzU4O",
        textBefore: "Iniciar",
        textAfter: "Vídeo",

    },
    video3: {
        href: "https://youtube.com/shorts/ByuWSyQU7Is?si=N4Dh3bgKUR1zxQcD",
        textBefore: "Iniciar",
        textAfter: "Vídeo",

    },
    video4: {
        href: "https://youtube.com/shorts/xuin6mc1mHw?si=TV5uZzTDnCUPxajB",
        textBefore: "Iniciar",
        textAfter: "Vídeo",

    }
};


function HeroSectionThree({className, ...restProps}) {


    return (
      
           
        <DsnGrid className="" col={4} colTablet={1} rowGap={0} {...restProps}>
            

            <div className="video-inner p-relative  v-dark-head">
                <ParallaxImage {...heroData.img} height={""} overlay={2} className={"cover-fixed"} sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"/>
                <Button target={"_blank"} className={" v-middle z-h-99 z-middle"} {...heroData.video} >Assistir </Button>
            </div>
            <div className="video-inner p-relative h-full v-dark-head">
                <ParallaxImage {...heroData.img2} height={""} overlay={2} className={"cover-fixed"} sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"/>
                <Button target={"_blank"} className={" v-middle z-h-99 z-middle"} {...heroData.video2} >Assistir </Button>
            </div>
            <div className="video-inner p-relative h-full v-dark-head">
                <ParallaxImage {...heroData.img3} height={""} overlay={2} className={"cover-fixed"} sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"/>
                <Button target={"_blank"} className={" v-middle z-h-99 z-middle"} {...heroData.video3} >Assistir </Button>
            </div>
            <div className="video-inner p-relative h-full v-dark-head">
                <ParallaxImage {...heroData.img4} height={""} overlay={2} className={"cover-fixed"} sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"/>
                <Button target={"_blank"} className={" v-middle z-h-99 z-middle"} {...heroData.video4} >Assistir </Button>
            </div>
            

        </DsnGrid>
    )
}


export default HeroSectionThree;
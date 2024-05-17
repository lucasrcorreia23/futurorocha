import React from "react";
import Layout from "../layout/Layout";
import SliderPortfolio from "../components/slider-portfolio/SliderPortfolio";
import HeroSection from "../components/hero-section/HeroSection";
import TitleSection from "../components/heading/TitleSection";
import ServiceOne from "../components/services/grid/ServiceOne";
import ParallaxImage from "../components/Image/ParallaxImage";
import MoveBox from "../components/move-box/MoveBox";
import Button from "../components/button/Button";
import PortfolioSwiper from "../components/portfolio/PortfolioSwiper";
import SwiperPagination from "../components/swiper-pagination/SwiperPagination";
import Testimonial from "../components/testimonial/Testimonial";
import Accordion, { AccordionItem } from "../components/accordion/Accordion";
import DsnGrid from "../layout/DsnGrid";
import TitleCover from "../components/heading/TitleCover";
import BlogSwiper from "../components/bolg/BlogSwiper";
import Team from "../components/Team/Team";
import BrandClient from "../components/brand-client/BrandClient";
import ServiceTow from "../components/services/grid/ServiceTow";
import HeroSectionFour from "../components/hero-section/HeroSectionFour";
import HeroSectionThree from "../components/hero-section/HeroSectionThree";
import ButtonPopup from "/components/button-popup/ButtonPopup";


import { ServiceGrid } from "../components/services/Service";
import NextPage from "../components/next/NextPage";
import Footer from "../components/footer/Footer";
import ModalContact from "../components/model-right/ModalContact";
import Head from "next/head";
import Image from 'next/image'

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
  img: {src: "/img/futurorocha/stepsection.jpg", alt: ""},
  video: {
      href: "https://www.youtube.com/watch?v=D48T0wNm96w",
      textBefore: "Iniciar",
      textAfter: "Vídeo",

  }
};

const dataSlider = [
  {
    id: 1,
    logo: "/img/futurorocha/logotipo.png",
    title: `Especialistas em Propriedade Intelectual:<br/>descubra como proteger e potencializar a sua marca.`,
    href: {
      href: "#0",
      target: "_blank",
      rel: "nofollow",
    },
    buttonText: "Fale conosco agora",
    src: "/img/futurorocha/banner1.png",
    subtitle: ``,
    overlay: 4,
  },
  
  {
    id: 2,
    logo: "/img/futurorocha/logotipo.png",
    title: `O futuro da sua<br/> marca começa aqui.`,

    href: {
      href: "#0",
      target: "_blank",
      rel: "nofollow",
    },
    buttonText: "Fale conosco agora",
    src: "/img/futurorocha/banner2.jpg",
    subtitle: ``,
    overlay: 6,
  },
  {
    id: 3,
    logo: "/img/futurorocha/logotipo.png",
    title: `Proteja e potencialize <br/>o seu principal ativo, sua marca.`,
    href: {
      href: "#0",
      target: "_blank",
      rel: "nofollow",
    },
    buttonText: "Fale conosco agora",
    subtitle: ``,
    src: "/img/futurorocha/banner3.jpg",
    overlay: 6,
  },
  
];

function Home() {
  TitleSection.defaultProps = {
    classDesc: "line-shape line-shape-before",
    classDesInner: "line-bg-right",
  };

  return (
    <Layout>
      <Head>
        <title>Futuro Rocha</title>
      </Head>
      
      
      <SliderPortfolio
        webgel
        loop={true}
        fullWidth
        className="align-items-end pb-80"
        data={dataSlider}
        optionSlider={{     
          
          speed:20000,
          parallax: true,         
                }}
        webgelOptions={{
          intensity: 1,
          displacement: "/img/displacement/8.jpg",
          speedIn: 8,
        }}
        metaData={{ hasSeparator: false }}
      />
     
      {/*Start box vertical Section*/}
      <section
        className="box-gallery-vertical container section-margin"
        data-dsn-title="Como registrar sua marca"
      >
        <DsnGrid
          col={2}
          colTablet={1}
          colGap={0}
          rowGap={0}
          rowGapTablet={0}
          rowGapMobile={0}
        >
          <div className="p-relative mb-lg-section">
          <div className="video-inner p-relative h-full v-dark-head ">
                <ParallaxImage {...heroData.img} height={""} overlay={2} sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              20vw"/>
                <ButtonPopup className={"v-middle z-h-99"} {...heroData.video} />
            </div>
          </div>
          <div className="p-relative pt-lg-section">
            <div className="box-info h-100 box-padding background-section ">
              <DsnGrid className="box-info-inner" col={1} colGap={0}>
                <TitleCover>Futuro Rocha</TitleCover>
                <TitleSection
                  className={"text-uppercase"}
                  description={"Passo a passo"}
                  defaultSpace={false}
                >
                  Registro de Marca<br/>
na Futuro Rocha
                </TitleSection>
                <Accordion>
                  <AccordionItem title="Consulta de Viabilidade" active number={1}>
                    <p>
                    Iniciamos com uma análise de viabilidade para garantir que sua marca seja única e elegível para registro.
                    </p>
                  </AccordionItem>
                  <AccordionItem title="Análise e Estratégia" number={2}>
                    <p>
                    Nossa equipe especializada realiza uma análise abrangente, desenvolvendo estratégias para otimizar o processo de registro.
                    </p>
                  </AccordionItem>
                  <AccordionItem title="Documentação Necessária" number={3}>
                    <p>
                    Auxiliamos na preparação e coleta de toda a documentação necessária para o processo, garantindo sua conformidade.
                    </p>
                  </AccordionItem>
                  <AccordionItem title="Pedido de Registro" number={4}>
                    <p>
                    Submetemos seu pedido ao INPI - Instituto Nacional da Propriedade Industrial, acompanhando cada etapa do processo.
                    </p>
                  </AccordionItem>
                  <AccordionItem title="Acompanhamento e Resposta a Exigências" number={5}>
                    <p>
                    Monitoramos o status do seu pedido e, se necessário, respondemos a quaisquer exigências do INPI para garantir uma tramitação eficiente.
                    </p>
                  </AccordionItem>
                  <AccordionItem title="Concessão do Registro" number={6}>
                    <p>
                    Finalmente, celebramos a concessão do registro de sua marca, tornando-a legalmente protegida e exclusiva.
                    </p>
                  </AccordionItem>
                  <AccordionItem title="Renovação e Manutenção" number={7}>
                    <p>
                    Após a concessão, cuidamos da renovação periódica, garantindo a manutenção contínua da proteção de sua marca
                    </p>
                  </AccordionItem>
                </Accordion>
              </DsnGrid>
            </div>
          </div>
        </DsnGrid>
      </section>
      {/*End box vertical Section*/}
      {/*Start Service*/}
      <div className="container section-margin" data-dsn-title="Serviços">
        <TitleSection description={"Serviços"}>
        Por que a <br /> Futuro Rocha?
        </TitleSection>
        <ServiceTow className={"icon-left"} />
      </div>
      {/*End Service*/}
      <HeroSection
        className="container section-margin container fill-right-container "
        data-dsn-title="História"
      />

      <ParallaxImage
        alt={""}
        className={"cover-fixed rounded"}
        src={"/img/futurorocha/extender-photo.jpg"}
        parallaxFrom={{ scale: 1.5 }}
        parallax={{ scale: 1.1 }}
        overlay={5}
      />
      {/*End Parallax Img*/}
      <section
        className="container section-margin"
        data-dsn-title="Nossos parceiros"
      >
        <TitleSection
          className={`align-items-center text-center`}
          description={"Nossos parceiros"}
        >
          Mais do que uma marca, uma parceria
        </TitleSection>
        <div className="dsn-up max-w750 mx-auto d-flex align-items-center ">
        <p className="text-center  mb-30">
        Localizado na cidade de Florianópolis - SC, transcendemos fronteiras, exercendo nossa atuação de forma nacional e internacional. Empresas e clientes em todos os estados do Brasil confiam em nossa capacidade de navegar pelas complexidades da Propriedade Intelectual com confiança e maestria.
        </p>
        </div>

        <BrandClient
          col={4}
          colTablet={3}
          colMobile={2}
          colGap={0}
          rowGap={0}
        />
      </section>
      {/*========== End brand-client Section ==========*/}

      {/*Start testimonial Section*/}
      <div className="section-margin" data-dsn-title="Depoimentos">
        <Testimonial
          className="container section-margin"
          title="O que os nossos<br/>
          clientes dizem"
          skin={["testimonials-half"]}
          backgroundColor={"background-section"}
          desktop={{ slidesPerView: 2 }}
          mobile={{ slidesPerView: 1 }}
          speed={1000}
          grabCursor
          loop
          loopedSlides={2}
          parallax
          parallaxImage={{ "data-swiper-parallax-scale": 0.7 }}
          parallaxContent={{
            "data-swiper-parallax-opacity": 0,
            "data-swiper-parallax": "30%",
          }}
        >
          <SwiperPagination
            className={`justify-content-between dsn-container mt-30`}
          />
        </Testimonial>
      </div>

      {/*End testimonial Section*/}

      {/*<!-- ========== End box-gallery-vertical Section ========== */}
      <section className="container  section-margin" data-dsn-title="O que fazemos">
        
        <DsnGrid col={2} colTablet={1} className=" mb-50">
        
          <div className="box-left">
          <TitleSection
          className={` second-title mb-15`}
          description={"O QUE E COMO FAZEMOS?"}
        >
          
        </TitleSection>
        <h4>Não nos limitamos à proteção dos ativos criativos de nossos clientes.</h4>
          </div>
          <div className="box-right  justify-content-end d-flex flex-column">
            <p className="max-w570 dsn-up mb-15 ">
            Visualizamos o futuro com a perspectiva de amplificar e potencializar esses ativos, criando oportunidades para novos e lucrativos negócios.
            </p>

            <p className="max-w570 dsn-up">
            <b>Aqui estão alguns dos serviços que prestamos:</b>
            </p>
          </div>
        </DsnGrid>
        <ServiceGrid
          className="icon-left border-top pt-50 align-items-start p-0"
          iconOption={{
            className: "background-main p-15 align-self-center",
          }}
          col={3}
          colTablet={1}
          colGap={75}
          data={[
            {
              icon: "",
              title: "Imersão Profunda",
              description:
                "Não somos apenas prestadores de serviços; mergulhamos profundamente na essência de cada marca para compreender suas origens e direcionamento estratégico.",
            },
            {
              icon: "",
              title: "Especialistas em Branding e Design",
              description:
                "Somos uma equipe de profissionais apaixonados por branding e design, focados em fornecer soluções personalizadas e inovadoras para cada desafio.",
            },
            {
              icon: "",
              title: "Conexão Humana",
              description:
                " Valorizamos os relacionamentos e a colaboração estreita com nossos clientes, trabalhando lado a lado para atingir metas e resultados excepcionais.",
            },
            {
              icon: "",
              title: "Imersão Profunda",
              description:
                "Não somos apenas prestadores de serviços; mergulhamos profundamente na essência de cada marca para compreender suas origens e direcionamento estratégico.",
            },
            {
              icon: "",
              title: "Especialistas em Branding e Design",
              description:
                "Somos uma equipe de profissionais apaixonados por branding e design, focados em fornecer soluções personalizadas e inovadoras para cada desafio.",
            },
            {
              icon: "",
              title: "Conexão Humana",
              description:
                " Valorizamos os relacionamentos e a colaboração estreita com nossos clientes, trabalhando lado a lado para atingir metas e resultados excepcionais.",
            },
            {
              icon: "",
              title: "Imersão Profunda",
              description:
                "Não somos apenas prestadores de serviços; mergulhamos profundamente na essência de cada marca para compreender suas origens e direcionamento estratégico.",
            },
            {
              icon: "",
              title: "Especialistas em Branding e Design",
              description:
                "Somos uma equipe de profissionais apaixonados por branding e design, focados em fornecer soluções personalizadas e inovadoras para cada desafio.",
            },
            {
              icon: "",
              title: "Conexão Humana",
              description:
                " Valorizamos os relacionamentos e a colaboração estreita com nossos clientes, trabalhando lado a lado para atingir metas e resultados excepcionais.",
            },
          ]}
        />
      </section>

      {/*========== End brand-client Section ==========*/}

      {/*<!-- ========== box-gallery-vertical Section ==========*/}
      <div className="container  section-margin" >
        <HeroSectionFour />
      </div>

      {/*<!-- ========== Video Section ========== */}
      <div className="container section-margin" data-dsn-title="Na mídia">
      <h2 className="text-center">
            Futuro Rocha na mídia
            </h2>
        <HeroSectionThree />
      </div>
      {/*<!-- ========== End Video Section ========== */}

      {/*========== Next Page ==========*/}
      <NextPage className="section-padding border-top background-section" data-dsn-title="Contato" />
      {/*========== End Next Page ==========*/}

      {/*========== Footer ==========*/}
      <Footer className="background-section" />
      {/*========== End Footer ==========*/}
    </Layout>
  );
}

export default Home;

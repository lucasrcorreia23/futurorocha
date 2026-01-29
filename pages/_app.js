import "@fancyapps/ui/dist/fancybox.css";
import "flickr-justified-gallery/src/fjGallery.css";
import "swiper/css";
import "swiper/css/parallax";
import "swiper/css/pagination";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import "../styles/style.scss";

import Script from "next/script";
import { Back, gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import dsnEffect, {
  moveSection,
  fade,
  textAnimation,
} from "../animation/dsnEffect";
import { Provider } from "react-redux";
import { store } from "../features/store";
import EremiaMenu from "../components/header/menu/EremiaMenu";
import OptionTheme from "../components/option-theme/OptionTheme";
import RightScrollTop from "../components/option-theme/RightScrollTop";
import { checkMobile, parallaxIt } from "../hooks/helper";
import LoadingPage from "../layout/LoadingPage";
import { tdEnd } from "../hooks/transition/transitionDefalut";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

dsnEffect.registerEffect(moveSection, fade, textAnimation);

gsap.config({
  nullTargetWarn: false,
});
gsap.defaults({
  duration: 1,
  overwrite: "auto",
});

function MyApp({ Component, pageProps }) {
  const [creativeLine, setCreativeLine] = useState(true);
  //--> v-dark , v-light
  const [colorPage, setColorPage] = useState("v-dark");

  useEffect(() => {
    dsnEffect.registerEffect(tdEnd);
  });

  useEffect(() => {
    const scrollDiv = document.createElement("div");
    scrollDiv.style.cssText =
      "width:100px;height:100px;overflow: scroll;position: absolute;top: -9999px;";
    document.body.appendChild(scrollDiv);
    document.body.style.setProperty(
      "--dsn-width-scroll",
      scrollDiv.offsetWidth - scrollDiv.clientWidth + "px"
    );
    document.body.removeChild(scrollDiv);
  }, []);

  useEffect(() => {
    if (creativeLine) document.body.classList.add("dsn-line-style");
    else document.body.classList.remove("dsn-line-style");
  }, [creativeLine]);

  useEffect(() => {
    if (checkMobile(true)) return;

    const options = Object.assign(
      {},
      {
        speed: 0.5,
        move: 20,
      }
    );

    const parallaxHover = document.body.querySelectorAll(
      '[data-dsn="parallax"]'
    );

    parallaxHover.forEach((item) => {
      /**
       * Append Icon
       */
      const icon = document.createElement("div");
      icon.classList.add("icon-circle");
      icon.style.minWidth = "1px";
      item.appendChild(icon);

      /**
       *
       */
      item.removeAttribute("data-dsn");
      item.classList.add("dsn-parallax-hover");
      const scale = item.classList.contains("image-zoom");
      const moveIcon = item.classList.contains("move-circle");

      const mouseEnter = function (e) {
        if (scale) gsap.to([item, icon], 0.3, { scale: 1.03 });
      };

      const mouseLeave = function (e) {
        gsap.to([item, icon], 1, {
          x: 0,
          y: 0,
          scale: 1,
          ease: Back.easeOut.config(4),
        });
      };

      const mouseMove = function (e) {
        parallaxIt(e, item, options);
        if (moveIcon)
          parallaxIt(e, icon, { ...options, move: options.move * 2 });
      };

      /**
       * Event
       */
      item.addEventListener("mouseenter", mouseEnter);
      item.addEventListener("mouseleave", mouseLeave);
      item.addEventListener("mousemove", mouseMove);
    });
  }, []);

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Futuro Rocha - Propriedade Intelectual, Games e IA | Escritório Jurídico Especializado</title>
        <meta name="title" content="Futuro Rocha - Propriedade Intelectual, Games e IA | Escritório Jurídico Especializado" />
        <meta name="description" content="Escritório jurídico especializado em Propriedade Intelectual, Games, Inteligência Artificial e Direito Digital. Proteção de marcas, patentes, direitos autorais e valoração de ativos intangíveis. Atuação nacional e internacional em Florianópolis/SC." />
        <meta name="keywords" content="propriedade intelectual, registro de marca, INPI, patente, direito autoral, games, inteligência artificial, direito digital, LGPD, valoração de ativos, startups, economia criativa, Florianópolis, escritório jurídico, Arno Ribeiro Rocha, contrafação de marca" />
        <meta name="author" content="Futuro Rocha" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Portuguese" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        <meta name="geo.region" content="BR-SC" />
        <meta name="geo.placename" content="Florianópolis" />
        <meta name="geo.position" content="-27.5954;-48.5480" />
        <meta name="ICBM" content="-27.5954, -48.5480" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://futurorocha.com.br/" />
        <meta property="og:title" content="Futuro Rocha - Propriedade Intelectual, Games e IA | Escritório Jurídico Especializado" />
        <meta property="og:description" content="Escritório jurídico especializado em Propriedade Intelectual, Games, Inteligência Artificial e Direito Digital. Proteção de marcas, patentes, direitos autorais e valoração de ativos intangíveis." />
        <meta property="og:image" content="https://futurorocha.com.br/img/futurorocha/logotipo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="Futuro Rocha" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://futurorocha.com.br/" />
        <meta name="twitter:title" content="Futuro Rocha - Propriedade Intelectual, Games e IA" />
        <meta name="twitter:description" content="Escritório jurídico especializado em Propriedade Intelectual, Games, Inteligência Artificial e Direito Digital." />
        <meta name="twitter:image" content="https://futurorocha.com.br/img/futurorocha/logotipo.png" />
        
        {/* Favicon */}
        <link rel="icon" href="/img/favicon.ico" />
        <link rel="apple-touch-icon" href="/img/favicon.ico" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://futurorocha.com.br/" />
        
        {/* Alternate Languages */}
        <link rel="alternate" hrefLang="pt-BR" href="https://futurorocha.com.br/" />
        
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              "name": "Futuro Rocha",
              "description": "Escritório jurídico especializado em Propriedade Intelectual, Games, Inteligência Artificial e Direito Digital",
              "url": "https://futurorocha.com.br",
              "logo": "https://futurorocha.com.br/img/futurorocha/logotipo.png",
              "image": "https://futurorocha.com.br/img/futurorocha/logotipo.png",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Florianópolis",
                "addressRegion": "SC",
                "addressCountry": "BR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-27.5954",
                "longitude": "-48.5480"
              },
              "founder": {
                "@type": "Person",
                "name": "Arno Ribeiro Rocha",
                "jobTitle": "Advogado e Mestre em Propriedade Intelectual"
              },
              "areaServed": {
                "@type": "Country",
                "name": "Brasil"
              },
              "serviceType": [
                "Propriedade Intelectual",
                "Registro de Marca",
                "Direito Autoral",
                "Direito Digital",
                "LGPD",
                "Valoração de Ativos Intangíveis"
              ],
              "telephone": "+55-48-8840-5715",
              "email": "contato@futurorocha.com.br",
              "sameAs": [
                "http://linkedin.com/in/futuro-rocha-38a1692aa",
                "http://www.youtube.com/@futurorocha"
              ],
              "priceRange": "$$",
              "openingHours": "Mo-Fr 09:00-18:00"
            })
          }}
        />
        
        {/* Structured Data - BreadcrumbList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://futurorocha.com.br/"
                }
              ]
            })
          }}
        />
        
        {/* Structured Data - WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Futuro Rocha",
              "url": "https://futurorocha.com.br",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://futurorocha.com.br/?s={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </Head>

      <Provider store={store}>
        <div id="__dsn_content" className={colorPage}>
          <LoadingPage />
          <EremiaMenu hamburger />
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-KK8NV0W3NW"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-KK8NV0W3NW');
            `}
          </Script>
          <Script id="gtm" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-T2498J63');
            `}
          </Script>
          <Component {...pageProps} />
          <OptionTheme
            lineTheme={[creativeLine, setCreativeLine]}
            pageColor={[colorPage, setColorPage]}
          />
          <RightScrollTop options={{ duration: 1.5, ease: "power4.inOut" }} />
        </div>
      </Provider>
    </>
  );
}

export default MyApp;

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
        <title>Futuro Rocha</title>
        <meta name="description" content="Futuro Rocha" />
        <link rel="icon" href="/img/favicon.ico" />
        <link rel="apple-touch-icon" href="/img/favicon.ico" />
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

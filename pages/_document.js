import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";



export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        
        {/* Fonts */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Poppins:wght@300;400;500;600;700&display=swap"
        />
        <link rel="stylesheet" href="https://cdn.positus.global/production/resources/robbu/whatsapp-button/whatsapp-button.css"/>

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
      </Head>
      <body>
      <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T2498J63"
              height="0" width="0" style={{display: 'none', visibility: 'hidden'}}>

            </iframe>
          </noscript>
        <Main />
        <NextScript />
        <Script src="/js/splitting.min.js" strategy="beforeInteractive" />
        <Script src="/js/isotope.min.js" strategy="beforeInteractive" />
        <Script src="/js/fjGallery.min.js" strategy="beforeInteractive" />
      </body>
    </Html>
  );
}

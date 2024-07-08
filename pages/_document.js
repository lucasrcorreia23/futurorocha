import { Html, Head, Main, NextScript } from "next/document";

import Script from "next/third-parties";


export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Poppins:wght@300;400;500;600;700&display=swap"
        />
       
       
      </Head>
      <body>
      <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T2498J63"
              height="0" width="0" style={{display: 'none', visibility: 'hidden'}}></iframe>
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

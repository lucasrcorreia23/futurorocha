import { Html, Head, Main, NextScript } from "next/document";
import { analytics } from "../data/site";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <meta name="theme-color" content="#07070D" />
        <link rel="icon" href="/img/favicon.ico" />
        <link rel="apple-touch-icon" href="/img/favicon.ico" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </Head>
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${analytics.gtm}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src={`https://www.facebook.com/tr?id=${analytics.metaPixel}&ev=PageView&noscript=1`}
          />
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

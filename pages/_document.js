import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Poppins:wght@300;400;500;600;700&display=swap"
        />
        
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-KK8NV0W3NW');
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script src="/js/splitting.min.js" strategy="beforeInteractive" />
        <Script src="/js/isotope.min.js" strategy="beforeInteractive" />
        <Script src="/js/fjGallery.min.js" strategy="beforeInteractive" />
      </body>
    </Html>
  );
}

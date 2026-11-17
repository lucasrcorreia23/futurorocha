import Script from "next/script";
import localFont from "next/font/local";
import WhatsAppButton from "../components/layout/WhatsAppButton";
import { analytics } from "../data/site";
import "../styles/globals.scss";

// Fontes servidas pelo próprio site (subset latin, arquivos variáveis do Google Fonts).
// O next/font/google do Next 13.2 quebra o build quando o Google devolve URLs sem extensão.
const inter = localFont({
  src: "../styles/fonts/inter-latin-var.woff2",
  weight: "400 600",
  variable: "--font-inter",
  display: "swap",
});
const sora = localFont({
  src: "../styles/fonts/sora-latin-var.woff2",
  weight: "400 700",
  variable: "--font-sora",
  display: "swap",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* As variáveis de fonte precisam estar no :root para valerem em todo o documento (inclusive body). */}
      <style jsx global>{`
        :root {
          --font-inter: ${inter.style.fontFamily};
          --font-sora: ${sora.style.fontFamily};
        }
      `}</style>

      <Script src={`https://www.googletagmanager.com/gtag/js?id=${analytics.ga4}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${analytics.ga4}');
        `}
      </Script>
      <Script id="gtm" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${analytics.gtm}');
        `}
      </Script>

      <Component {...pageProps} />
      <WhatsAppButton />
    </>
  );
}

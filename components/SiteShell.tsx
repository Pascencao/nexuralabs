import "@/app/globals.css";
import { Inter } from "next/font/google";
import JsonLd from "@/components/json-ld";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/components/i18n/LanguageProvider";
import type { Locale } from "@/lib/i18n/config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export default function SiteShell({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    <html lang={locale}>
      <head>
        <meta
          name="facebook-domain-verification"
          content="v5cm45amulqa7mjolp5odm6njwfaus"
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png" />
      </head>
      <body className={`${inter.variable} min-h-screen bg-canvas font-sans text-ink antialiased`}>
        <JsonLd locale={locale} />
        <LanguageProvider locale={locale}>
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>

        <script
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1111392737090271');
            fbq('track', 'PageView');
          `,
          }}
        />

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1111392737090271&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}

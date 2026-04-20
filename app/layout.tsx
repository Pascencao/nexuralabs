import type { Metadata, Viewport } from "next";
import "./css/style.css";
import "./css/additional-styles/utility-patterns.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Nexura Labs | Plataforma de streaming y monetización",
  description:
    "Construí tu propia plataforma de streaming y monetizá tu audiencia de forma directa. Web, mobile y Smart TV.",
  keywords: [
    "streaming",
    "plataforma OTT",
    "monetización directa",
    "Nexura Labs",
    "desarrollo de software",
  ],
  authors: [{ name: "Nexura Labs" }],
  openGraph: {
    title: "Nexura Labs | Plataforma de streaming y monetización",
    description:
      "Ayudamos a empresas de medios a operar su propia plataforma en Web, Mobile y Smart TV con monetización directa.",
    url: "https://www.nexuralabs.com",
    siteName: "Nexura Labs",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexura Labs | Plataforma de streaming y monetización",
    description:
      "Construí tu propia plataforma de streaming y monetizá tu audiencia de forma directa.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta
          name="facebook-domain-verification"
          content="v5cm45amulqa7mjolp5odm6njwfaus"
        />
      </head>
      <body
        className={`${inter.variable} relative min-h-screen bg-nexura-bg font-inter text-base font-normal text-white antialiased`}
      >
        <div className="nexura-noise" aria-hidden />
        <div
          className="nexura-radial pointer-events-none fixed inset-0 -z-10"
          aria-hidden
        />

        <div className="relative z-10 flex min-h-screen flex-col overflow-x-hidden supports-[overflow:clip]:overflow-x-clip">
          {children}
        </div>

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

import config from "@/config/config.json";
import theme from "@/config/theme.json";
import TwSizeIndicator from "@/helpers/TwSizeIndicator";
import Footer from "@/partials/Footer";
import Header from "@/partials/Header";
import Providers from "@/partials/Providers";
import "@/styles/main.scss";

//Google Fonds implementieren
import { Architects_Daughter, Londrina_Shadow, Bowlby_One_SC } from 'next/font/google';
 

const archiDaughter = Architects_Daughter({
  subsets: ['latin'],
  weight: ['400', ],
    variable: '--font-archiDaught',
});

const londrinaS = Londrina_Shadow({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-londrinaS',
});
const bowlbySC = Bowlby_One_SC({
  subsets: ['latin'],
  weight: ['400',],
  variable: '--font-bowlbySC',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // import google font css
  const pf = theme.fonts.font_family.primary;
  const sf = theme.fonts.font_family.secondary;

  return (
    <html lang="en" className={`${bowlbySC.variable} ${archiDaughter.variable} ${londrinaS.variable}`}>

      <head>
        {/* responsive meta */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />

        {/* favicon */}
        <link rel="shortcut icon" href={config.site.favicon} />
        {/* theme meta */}
        <meta name="theme-name" content="nextplate" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#fff"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#000"
        />

        {/* google font css */}
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href={`https://fonts.googleapis.com/css2?family=${pf}${
            sf ? "&family=" + sf : ""
          }&display=swap`}
          rel="stylesheet"
        />
      </head>

      <body suppressHydrationWarning={true}>
        < div className={archiDaughter.className}>
        <TwSizeIndicator />
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
        </div>
      </body>
    </html>
  );
}

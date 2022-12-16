import { GoogleAnalytics } from "nextjs-google-analytics";

import ThemeProvider from "@context/Theme";
import ScreenProvider from "@context/ScreenSize";
import CursorTracker from "@context/CursorPosition";
import SourceMenuProvider from "@context/SourceMenu";

import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <ScreenProvider>
      <Head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <CursorTracker>
        <SourceMenuProvider>
          <ThemeProvider>
            <GoogleAnalytics />
            <Component {...pageProps} />
          </ThemeProvider>
        </SourceMenuProvider>
      </CursorTracker>
    </ScreenProvider>
  );
}

export default MyApp;

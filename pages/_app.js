import { GoogleAnalytics } from "nextjs-google-analytics";

import ThemeProvider from "@context/Theme";
import ScreenProvider from "@context/ScreenSize";
import CursorTracker from "@context/CursorPosition";
import SourceMenuProvider from "@context/SourceMenu";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ScreenProvider>
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

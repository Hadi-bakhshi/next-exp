import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme/theme";
import { CssBaseline } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import { prefixer } from "stylis";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";


function MyApp({ Component, pageProps }: AppProps) {

const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin]
})


  return (
    
    <ThemeProvider theme={theme}>
      <CacheProvider value={cacheRtl}>
      <CssBaseline />
      <Component {...pageProps} />
      </CacheProvider>
    </ThemeProvider>
  );
}

export default MyApp;

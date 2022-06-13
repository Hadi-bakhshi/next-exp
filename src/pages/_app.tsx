import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme/theme";
import { CssBaseline } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import { prefixer } from "stylis";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { wrapper } from "../feature/store";
import { useEffect } from "react";
import { useAppSelector } from "../hooks/rtk";
import { authState } from "../feature/authentication/authSlice";
// import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }: AppProps) {
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  const appState = useAppSelector(authState);

  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles?.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CacheProvider value={cacheRtl}>
        <CssBaseline />
        <Component {...pageProps} />
      </CacheProvider>
    </ThemeProvider>
  );
}



export default wrapper.withRedux(MyApp);

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
import { useEffect, useRef } from "react";
import { useAppSelector } from "../hooks/rtk";
import { authState } from "../feature/authentication/authSlice";
import { useRouter } from "next/router";
import AccessDeniedPage from "./accessdeny";
import jwt from "jsonwebtoken";
// import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }: AppProps) {
  const appState = useAppSelector(authState);
  const router = useRouter();
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles?.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  let isUserAllowed = true;
  if (appState.user?.token) {
    const getUserData = (token: string) => {
      return jwt.decode(token);
    };

    const { role }: any = getUserData(appState.user?.token);
    if (router.pathname.startsWith("/admin") && role !== "admin") {
      isUserAllowed = false;
    }
    if (router.pathname.startsWith("/client") && role !== "client") {
      isUserAllowed = false;
      console.log("entered");
    }
    console.log(isUserAllowed);
    console.log(role);
  } else {
    console.log("OZA KHITE");
    console.log(isUserAllowed);
  }


  

  const ComponentToRender = isUserAllowed ? Component : AccessDeniedPage;
  return (
    <ThemeProvider theme={theme}>
      <CacheProvider value={cacheRtl}>
        <CssBaseline />
        <ComponentToRender {...pageProps} />
      </CacheProvider>
    </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);

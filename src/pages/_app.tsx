import React, { useEffect, ReactElement } from "react";
import Head from "next/head";
import { ThemeProvider } from "src/contexts/theme";
import { store } from "../stores";
import { Provider } from "react-redux";
import { statusBarStyle } from "src/config";
import { NextPage } from "next";
import { AppProps } from "next/app";
import "src/styles/global.css";

// Custom Component Imports
import ThemeToggler from "src/components/theme-toggler";

// ** Extend App Props with Emotion
type ExtendedAppProps = AppProps & {
  Component: NextPage;
};

export default function App({
  Component,
  pageProps,
}: ExtendedAppProps): JSX.Element {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register(process.env.serviceWorkerUrl as string, {
        scope: "/",
      });
    }
  }, []);

  const getLayout =
    Component.getLayout ?? ((page: ReactElement) => <>{page}</>);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1, user-scalable=0, viewport-fit=cover"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content={statusBarStyle}
        />
        <link
          rel="apple-touch-startup-image"
          sizes="512x512"
          href="/logo512.png"
        />
        <link
          rel="apple-touch-startup-image"
          sizes="256x256"
          href="/logo256.png"
        />
        <link rel="apple-touch-icon" sizes="512x512" href="/logo512.png" />
        <link rel="apple-touch-icon" sizes="256x256" href="/logo256.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Provider store={store}>
        <ThemeProvider>{getLayout(<Component {...pageProps} />)}</ThemeProvider>
        <ThemeToggler />
      </Provider>
    </>
  );
}

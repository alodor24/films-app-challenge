import { GlobalStyle } from "@/styles/globalStyles";
import { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import theme from "@/styles/theme";
import SSRProvider from "react-bootstrap/SSRProvider";
import useFilterContextValue from "@/context/FilterContext/useFilterContextValue";
import FilterContext from "@/context/FilterContext";

export default function App({ Component, pageProps }: AppProps) {
  const filterContextValue = useFilterContextValue();

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <FilterContext.Provider value={filterContextValue}>
          <SSRProvider>
            <Head>
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
              />
              <title>The Movie App | Challenge</title>
            </Head>
            <Component {...pageProps} />
          </SSRProvider>
        </FilterContext.Provider>
      </ThemeProvider>
    </>
  );
}

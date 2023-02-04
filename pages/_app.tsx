import { GlobalStyle } from "@/styles/globalStyles";
import { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";
import theme from "@/styles/theme";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

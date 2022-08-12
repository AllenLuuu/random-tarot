import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import "../styles/globals.css";

const theme = extendTheme({
  fonts: {
    body: "Times New Roman, Segoe UI, Helvetica,Arial,'宋体',sans-serif",
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;

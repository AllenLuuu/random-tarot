import {
  ChakraProvider,
  createLocalStorageManager,
  extendTheme,
} from "@chakra-ui/react";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";
import { mode } from "@chakra-ui/theme-tools";
import type { AppProps } from "next/app";
import "../styles/globals.css";

const manager = createLocalStorageManager("random-tarot-color-mode");

const theme = extendTheme({
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode("#FFFFF0", "gray.800")(props),
      },
    }),
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} colorModeManager={manager}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;

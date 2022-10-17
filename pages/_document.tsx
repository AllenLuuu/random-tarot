import { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from '@chakra-ui/react'
import theme from '../styles/theme'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/static/icons/tarot.svg" style={{ color: "red" }} />
      </Head>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

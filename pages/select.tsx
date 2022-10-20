import type { NextPage } from "next";
import Head from "next/head";
import {
  Box,
  Flex,
} from "@chakra-ui/react";
import NextImage from "next/image";
import flipRandom from "../public/flip-random.svg";
import flipTarot from "../public/flip-tarot.svg";
import useWindowWidth from "../hooks/useWindowWidth";
import SpreadList from "../components/SpreadList";
import ModeChangeButton from "../components/ModeChangeButton";

const Select: NextPage = () => {
  const isMobile = useWindowWidth() < 768;

  const textWidth = useWindowWidth() * (isMobile? 0.8 : 0.4);
  const randomWidth = 0.571 * textWidth;
  const tarotWidth = 0.429 * textWidth;
  const textHeight = 0.786 * tarotWidth;

  const spreadListWidth = isMobile ? "90%" : "50%";

  return (
    <>
      <Head>
        <title>选取牌阵</title>
      </Head>
      <Flex align="center" justify="center" w="100%">
        <Flex align="center" justify="center" w={spreadListWidth} direction="column">
          <Box>
            <NextImage
              src={flipRandom}
              width={randomWidth}
              height={textHeight}
            />
            <NextImage src={flipTarot} width={tarotWidth} height={textHeight} />
          </Box>
          <SpreadList></SpreadList>
        </Flex>
      </Flex>
      <ModeChangeButton />
    </>
  );
};

export default Select;

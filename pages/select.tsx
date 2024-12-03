import { Box, Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import NextImage from "next/image";
import ModeChangeButton from "../components/ModeChangeButton";
import SpreadList from "../components/SpreadList";
import useWindowWidth from "../hooks/useWindowWidth";
import flipRandom from "../public/flip-random.svg";
import flipTarot from "../public/flip-tarot.svg";

const Select: NextPage = () => {
  const isMobile = useWindowWidth() < 768;

  const textWidth = useWindowWidth() * (isMobile ? 0.8 : 0.4);
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
        <Flex
          align="center"
          justify="center"
          w={spreadListWidth}
          direction="column"
        >
          <Box>
            <NextImage
              src={flipRandom}
              width={randomWidth}
              height={textHeight}
            />
            <NextImage src={flipTarot} width={tarotWidth} height={textHeight} />
          </Box>
          <SpreadList></SpreadList>
          <Box height={"80px"} />
        </Flex>
      </Flex>
      <ModeChangeButton
        position={"fixed"}
        bottom={isMobile ? "20px" : "50px"}
        right={isMobile ? "20px" : "50px"}
      />
    </>
  );
};

export default Select;

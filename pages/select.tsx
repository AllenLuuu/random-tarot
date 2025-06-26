import { Box, Flex, HStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import NextImage from "next/image";
import NextLink from "next/link";
import HomeButton from "../components/HomeButton";
import ModeChangeButton from "../components/ModeChangeButton";
import SpreadList from "../components/SpreadList";
import useIsMobile from "../hooks/useIsMobile";
import useWindowWidth from "../hooks/useWindowWidth";
import flipRandom from "../public/flip-random.svg";
import flipTarot from "../public/flip-tarot.svg";

const Select: NextPage = () => {
  const isMobile = useIsMobile();
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
          <NextLink
            href={{
              pathname: "/",
            }}
          >
            <HStack cursor={"pointer"}>
              <NextImage
                src={flipRandom}
                width={randomWidth}
                height={textHeight}
                alt={"random"}
              />
              <NextImage
                src={flipTarot}
                width={tarotWidth}
                height={textHeight}
                alt={"tarot"}
              />
            </HStack>
          </NextLink>
          <SpreadList></SpreadList>
          <Box height={"150px"} />
        </Flex>
      </Flex>
      <HomeButton
        position={"fixed"}
        bottom={isMobile ? "80px" : "120px"}
        right={isMobile ? "20px" : "50px"}
      />
      <ModeChangeButton
        position={"fixed"}
        bottom={isMobile ? "20px" : "50px"}
        right={isMobile ? "20px" : "50px"}
      />
    </>
  );
};

export default Select;

import Head from "next/head";
import { Button, Flex, Box, useColorMode, HStack } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import textRandom from "../public/text-random.svg";
import textTarot from "../public/text-tarot.svg";
import React from "react";
import { NextPage } from "next";
import useWindowWidth from "../hooks/useWindowWidth";

const Home: NextPage = () => {
  const isMobile = useWindowWidth() < 768;

  const textWidth = useWindowWidth() * (isMobile ? 0.9 : 0.7);
  const randomWidth = 0.571 * textWidth;
  const tarotWidth = 0.429 * textWidth;
  const textHeight = 0.786 * tarotWidth;

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Head>
        <title>随机塔罗抽牌器</title>
      </Head>
      <Flex height={"90vh"} direction="column" justify="center" align="center" gap={isMobile? "100px" : undefined}>
        <Box>
          <Image
            alt="random"
            src={textRandom}
            width={randomWidth}
            height={textHeight}
          />
          <Image
            alt="tarot"
            src={textTarot}
            width={tarotWidth}
            height={textHeight}
          />
        </Box>
        <HStack gap={5}>
          <Button size={"lg"} colorScheme={"black"} variant={"outline"} onClick={toggleColorMode}>
            {colorMode === "light" ? "深色" : "浅色"}模式
          </Button>
          <Link href="/select">
            <Button mt={50} colorScheme="teal" size="lg">
              现在开始
            </Button>
          </Link>
        </HStack>
      </Flex>
    </>
  );
};

export default Home;

import Head from "next/head";
import { Button, Flex, Box } from "@chakra-ui/react";
import styles from "../styles/global.module.scss";
import Link from "next/link";
import Image from "next/image";
import textRandom from "../public/text-random.svg";
import textTarot from "../public/text-tarot.svg";
import React from "react";
import { NextPage } from "next";
import useWindowWidth from "../hooks/useWindowWidth";

const Home: NextPage = () => {
  const textWidth = useWindowWidth() * 0.7;
  const randomWidth = 0.571 * textWidth;
  const tarotWidth = 0.429 * textWidth;
  const textHeight = 0.786 * tarotWidth;
  return (
    <>
      <Head>
        <title>随机塔罗抽牌器</title>
        <link rel="icon" href="./hexagram-1.svg" style={{ color: "red" }} />
      </Head>
      <Flex
        mt="100px"
        direction="column"
        justify="center"
        align="center"
        bgColor={styles.bgColor}
      >
        <Box>
          <Image alt="random" src={textRandom} width={randomWidth} height={textHeight} />
          <Image alt="tarot" src={textTarot} width={tarotWidth} height={textHeight} />
        </Box>
        <Link href="/select">
          <Button mt={50} colorScheme="teal" size="lg">
            现在开始
          </Button>
        </Link>
      </Flex>
    </>
  );
};

export default Home;

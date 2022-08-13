import type { NextPage } from "next";
import Head from "next/head";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Flex,
  Input,
  IconButton,
  HStack,
  Link,
  useDimensions,
} from "@chakra-ui/react";
import NextLink from "next/link";
import NextImage from "next/image";
import flipRandom from "../public/flip-random.svg";
import flipTarot from "../public/flip-tarot.svg";
import { SearchIcon } from "@chakra-ui/icons";
import spreads from "../data/spreads.json";
import useWindowWidth from "../hooks/useWindowWidth";

const Select: NextPage = () => {
  const textWidth = useWindowWidth() * 0.4;
  const randomWidth = 0.571 * textWidth;
  const tarotWidth = 0.429 * textWidth;
  const textHeight = 0.786 * tarotWidth;

  // const scrollHeight;

  const list = spreads.map((item) => {
    const spreads = item.spreads.map((spread) => {
      return (
        <NextLink href={spread.link} key={spread.name}>
          <Link>
            <AccordionPanel pb={4}>{spread.name}</AccordionPanel>
          </Link>
        </NextLink>
      );
    });

    return (
      <AccordionItem key={item.type}>
        <h2>
          <AccordionButton bgColor="gray.100">
            <Box flex="1" textAlign="left">
              {item.type}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        {spreads}
      </AccordionItem>
    );
  });
  return (
    <>
      <Head>
        <title>选取牌阵</title>
        <link rel="icon" href="./hexagram-1.svg" style={{ color: "red" }} />
      </Head>
      <Flex align="center" justify="center" w="100%">
        <Flex align="center" justify="center" w="50%" direction="column">
          <Box>
            <NextImage
              src={flipRandom}
              width={randomWidth}
              height={textHeight}
            />
            <NextImage src={flipTarot} width={tarotWidth} height={textHeight} />
          </Box>
          <HStack w="100%" spacing="10px" mb={10} pos="sticky" top={0} py="10px" bgColor="white" zIndex={1}>
            <Input placeholder="搜索牌阵" />
            <IconButton aria-label="Search database" icon={<SearchIcon/>} />
          </HStack>
          <Accordion defaultIndex={[0, 1, 2, 3]} allowMultiple w="100%">
            {list}
          </Accordion>
        </Flex>
      </Flex>
    </>
  );
};

export default Select;

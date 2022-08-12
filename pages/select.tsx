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
} from "@chakra-ui/react";
import NextLink from "next/link";
import Image from "next/image";
import flipRandom from "../public/flip-random.svg";
import flipTarot from "../public/flip-tarot.svg";
import { SearchIcon } from "@chakra-ui/icons";
import spreads from "../data/spreads.json";

const Select: NextPage = () => {
  const list = spreads.map((item) => {
    const spreads = item.spreads.map((spread) => {
      return (
        <NextLink href={spread.link}>
          <Link>
            <AccordionPanel pb={4}>{spread.name}</AccordionPanel>
          </Link>
        </NextLink>
      );
    });
    return (
      <AccordionItem>
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
            <Image src={flipRandom} />
            <Image src={flipTarot} />
          </Box>
          <HStack w="100%" spacing="10px" mb={10}>
            <Input placeholder="搜索牌阵" />
            <IconButton aria-label="Search database" icon={<SearchIcon />} />
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

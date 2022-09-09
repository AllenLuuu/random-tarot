import type { NextPage } from "next";
import Head from "next/head";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button,
  Flex,
  Input,
  IconButton,
  HStack,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Img,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import NextImage from "next/image";
import flipRandom from "../public/flip-random.svg";
import flipTarot from "../public/flip-tarot.svg";
import { QuestionOutlineIcon, SearchIcon } from "@chakra-ui/icons";
import spreads from "../data/spreads.json";
import useWindowWidth from "../hooks/useWindowWidth";
import { useState } from "react";

const Select: NextPage = () => {
  const textWidth = useWindowWidth() * 0.4;
  const randomWidth = 0.571 * textWidth;
  const tarotWidth = 0.429 * textWidth;
  const textHeight = 0.786 * tarotWidth;

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [modalTitle, setTitle] = useState("");
  const [modalPicture, setPicture] = useState("");
  const [modalInfo, setInfo] = useState("");
  const [modalPath, setPath] = useState("");

  function openInfo(title: string, picture: string, info: string, path: string): void {
    setTitle(title);
    setPicture(picture);
    setInfo(info);
    setPath(path);
    onOpen();
  }

  const list = spreads.map((item) => {
    const spreads = item.spreads.map((spread) => {
      return (
        <AccordionPanel pb={4} key={spread.name}>
          <Flex justify="space-between">
            <Box flex={1}>
              <NextLink href={spread.link} key={spread.name}>
                <Link>
                  <Box w="100%">{spread.name}</Box>
                </Link>
              </NextLink>
            </Box>
            <QuestionOutlineIcon
              onClick={() =>
                openInfo(spread.name, spread.guide, spread.description, spread.link)
              }
              _hover={{ cursor: "pointer" }}
            />
          </Flex>
        </AccordionPanel>
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
          <HStack
            w="100%"
            spacing="10px"
            mb={10}
            pos="sticky"
            top={0}
            py="10px"
            bgColor="white"
            zIndex={1}
          >
            <Input placeholder="搜索牌阵" />
            <IconButton aria-label="Search spreads" icon={<SearchIcon />} />
          </HStack>
          <Accordion defaultIndex={[0, 1, 2, 3]} allowMultiple w="100%">
            {list}
          </Accordion>
        </Flex>
      </Flex>

      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{modalTitle}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Img src={modalPicture}></Img>
            <Text>{modalInfo}</Text>
          </ModalBody>
          <ModalFooter>
            <Link href={modalPath}>
              <Button colorScheme="teal" mr={3}>
                就它了
              </Button>
            </Link>
            <Button variant="ghost" onClick={onClose}>
              关闭
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Select;

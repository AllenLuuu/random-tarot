import { QuestionOutlineIcon, SearchIcon } from "@chakra-ui/icons";
import {
  useDisclosure,
  AccordionPanel,
  Flex,
  Box,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  HStack,
  Input,
  IconButton,
  Accordion,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useState } from "react";
import SpreadInfo from "./SpreadInfo";
import spreads from "../data/spreads.json";

export default function SpreadList() {
  const [modalTitle, setTitle] = useState("");
  const [modalPicture, setPicture] = useState("");
  const [modalInfo, setInfo] = useState("");
  const [modalPath, setPath] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();

  function openInfo(
    title: string,
    picture: string,
    info: string,
    path: string
  ): void {
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
              <NextLink
                href={{
                  pathname: spread.link,
                  query: {
                    name: spread.name,
                    guide: spread.guide,
                    description: spread.description,
                  },
                }}
                key={spread.name}
              >
                <Link>
                  <Box w="100%">{spread.name}</Box>
                </Link>
              </NextLink>
            </Box>
            <QuestionOutlineIcon
              onClick={() =>
                openInfo(
                  spread.name,
                  spread.guide,
                  spread.description,
                  spread.link
                )
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
      <HStack
        w="100%"
        spacing="10px"
        mb={10}
        pos="sticky"
        top={0}
        py="10px"
        bgColor="white"
        zIndex={1}
        p="5px"
      >
        <Input placeholder="搜索牌阵" />
        <IconButton aria-label="Search spreads" icon={<SearchIcon />} />
      </HStack>
      <Accordion defaultIndex={[0, 1, 2, 3]} allowMultiple w="100%">
        {list}
      </Accordion>

      <SpreadInfo
        name={modalTitle}
        guide={modalPicture}
        description={modalInfo}
        link={modalPath}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
}

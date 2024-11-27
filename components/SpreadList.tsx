import { QuestionOutlineIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Center,
  Flex,
  HStack,
  IconButton,
  Input,
  Link,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { ChangeEventHandler, KeyboardEventHandler, useState } from "react";
import spreads from "../data/spreads.json";
import SpreadInfo from "./SpreadInfo";

export default function SpreadList() {
  const [modalTitle, setTitle] = useState("");
  const [modalPicture, setPicture] = useState("");
  const [modalInfo, setInfo] = useState("");
  const [modalPath, setPath] = useState("");
  const [spreadList, setList] = useState<SpreadClass[]>(spreads);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const bgColor = useColorModeValue("#FFFFF0", "gray.800");
  const panelColor = useColorModeValue("#EEEEE0", "gray.700");
  const buttonColor = useColorModeValue("#F3F3E3", "gray.750");
  const buttonHoverColor = useColorModeValue("#EEEEE0", "gray.700");
  const buttonActiveColor = useColorModeValue("#DDDDD0", "gray.600");

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

  const [searchText, setText] = useState("");

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
  };

  const onKeyup: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };

  function search() {
    if (searchText === "") {
      setList(spreads);
    } else {
      let temp = spreads.map((e) => {
        return {
          type: e.type,
          spreads: e.spreads.filter((spread) => {
            return spread.name.includes(searchText);
          }),
        };
      });
      setList(temp);
    }
  }

  const List = spreadList.map((item) => {
    const Spreads = item.spreads.map((spread) => {
      return (
        <AccordionPanel pb={4} key={spread.name}>
          <Flex justify="space-between">
            <Box flex={1}>
              <NextLink
                href={{
                  pathname: spread.link,
                }}
                key={spread.name}
              >
                <Link>
                  <Box w="100%">{spread.name}</Box>
                </Link>
              </NextLink>
            </Box>
            <Center>
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
            </Center>
          </Flex>
        </AccordionPanel>
      );
    });

    return (
      <AccordionItem key={item.type}>
        <h2>
          <AccordionButton bgColor={panelColor}>
            <Box flex="1" textAlign="left">
              {item.type}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        {Spreads}
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
        bgColor={bgColor}
        zIndex={1}
        p="5px"
      >
        <Input
          value={searchText}
          onChange={handleInputChange}
          placeholder="搜索牌阵"
          onKeyUp={onKeyup}
        />
        <IconButton
          aria-label="Search spreads"
          onClick={search}
          icon={<SearchIcon />}
          bgColor={buttonColor}
          _hover={{ bgColor: buttonHoverColor }}
          _active={{ bgColor: buttonActiveColor }}
        />
      </HStack>
      <Accordion defaultIndex={[0, 1, 2, 3]} allowMultiple w="100%">
        {List}
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

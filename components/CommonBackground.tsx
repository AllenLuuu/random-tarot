import {
  ArrowBackIcon,
  HamburgerIcon,
  QuestionOutlineIcon,
  RepeatIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import cards from "../data/cards.json";
import spreads from "../data/spreads.json";
import useIsMobile from "../hooks/useIsMobile";
import useWindowHeight from "../hooks/useWindowHeight";
import { Card, Message } from "../types";
import AIButton from "./AIButton";
import ChatBox from "./Chat/ChatBox";
import ModeChangeButton from "./ModeChangeButton";
import Question from "./Question";
import SpreadInfo from "./SpreadInfo";
import SpreadList from "./SpreadList";

const CommonBackground = ({
  children,
  cardIndexes,
  flipStates,
  reverses,
  onReload,
}: {
  children: ReactNode;
  cardIndexes: number[];
  flipStates: boolean[];
  reverses: boolean[];
  onReload: () => void;
}) => {
  const router = useRouter();

  const path = router.pathname;
  const type = path.split("/")[2];
  const spreadsOfType = spreads.find((spreadType) => spreadType.route === type);
  const spread = spreadsOfType!.spreads.find((spread) => spread.link === path);

  const { name, guide, description } = spread!;

  const [question, setQuestion] = useState("");

  // states for chatbox
  const [divinationStarted, setDivinationStarted] = useState(false);
  const [divinationMessages, setDivinationMessages] = useState<Message[]>([]);

  const {
    isOpen: isDialogOpen,
    onOpen: onDialogOpen,
    onClose: onDialogClose,
  } = useDisclosure();
  const {
    isOpen: isDrawerOpen,
    onOpen: onDrawerOpen,
    onClose: onDrawerClose,
  } = useDisclosure();
  const {
    isOpen: isQuestionOpen,
    onOpen: onQuestionOpen,
    onClose: onQuestionClose,
  } = useDisclosure();
  const {
    isOpen: isChatOpen,
    onToggle: onChatToggle,
    getDisclosureProps,
  } = useDisclosure();
  const [hidden, setHidden] = useState(!isChatOpen);

  const isMobile = useIsMobile();

  const windowHeight = useWindowHeight() - 1;

  const bgColor = useColorModeValue("#FFFFF0", "gray.800");
  const drawerColor = useColorModeValue("teal.400", "gray.800");

  const [currentCardInfos, setCurrentCardInfos] = useState<Card[]>([]);

  const getCurrentCardInfos = () => {
    const infos = cardIndexes.map((cardi, posi) => ({
      position: posi + 1,
      ...cards[cardi],
      flipped: flipStates[posi],
      direction: (reverses[posi] ? "reversed" : "normal") as
        | "normal"
        | "reversed",
    }));
    return infos;
  };

  const resetChatBox = () => {
    setDivinationStarted(false);
    setDivinationMessages([]);
  };

  function handleReload() {
    onReload();
    onQuestionOpen();
    resetChatBox();
  }

  useEffect(() => {
    handleReload();
  }, []);

  useEffect(() => {
    setCurrentCardInfos(getCurrentCardInfos());
  }, [cardIndexes, flipStates, reverses]);

  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>

      <Flex minH={"100%"}>
        <Flex
          id="card_container"
          minHeight={windowHeight}
          flexGrow={1}
          direction={"column"}
          position={"relative"}
        >
          <Flex justify="space-between" px={5}>
            <Link href="/select">
              <IconButton
                aria-label="back"
                colorScheme="teal"
                variant="ghost"
                size="lg"
                icon={<ArrowBackIcon />}
              />
            </Link>
            <HStack>
              <IconButton
                aria-label="reload"
                colorScheme="teal"
                variant="ghost"
                size="lg"
                icon={<RepeatIcon />}
                onClick={handleReload}
              />
              <Question
                question={question}
                setQuestion={setQuestion}
                isOpen={isQuestionOpen}
                onClose={onQuestionClose}
              />
              <IconButton
                aria-label="back"
                colorScheme="teal"
                variant="ghost"
                size="lg"
                icon={<QuestionOutlineIcon />}
                onClick={onDialogOpen}
              />
            </HStack>
            <IconButton
              aria-label="back"
              colorScheme="teal"
              variant="ghost"
              size="lg"
              icon={<HamburgerIcon />}
              onClick={onDrawerOpen}
            />
          </Flex>

          <Box flexGrow={1} position={"relative"}>
            {children}
          </Box>

          <AIButton
            position={"absolute"}
            bottom={isMobile ? "80px" : "120px"}
            right={isMobile ? "20px" : "50px"}
            highlighted={isChatOpen}
            onClick={onChatToggle}
          />
          <ModeChangeButton
            position={"absolute"}
            bottom={isMobile ? "20px" : "50px"}
            right={isMobile ? "20px" : "50px"}
          />
        </Flex>

        {/* chatbox pc */}
        {isMobile || (
          <motion.div
            {...getDisclosureProps()}
            hidden={hidden}
            initial={false}
            onAnimationStart={() => setHidden(false)}
            onAnimationComplete={() => setHidden(!isChatOpen)}
            animate={{ width: isChatOpen ? 500 : 0 }}
            style={{
              height: "100vh",
              whiteSpace: "nowrap",
              color: "black",
            }}
          >
            <Box height={"100%"} display={isChatOpen ? "block" : "none"}>
              <ChatBox
                outlined
                started={divinationStarted}
                setStarted={setDivinationStarted}
                messages={divinationMessages}
                setMessages={setDivinationMessages}
                divinationElements={{
                  question,
                  spread: spread!,
                  cards: currentCardInfos,
                }}
              />
            </Box>
          </motion.div>
        )}
      </Flex>

      <Drawer isOpen={isDrawerOpen} placement="right" onClose={onDrawerClose}>
        <DrawerOverlay />
        <DrawerContent bgColor={bgColor}>
          <DrawerCloseButton />
          <DrawerHeader>选择牌阵</DrawerHeader>
          <DrawerBody p={0}>
            <SpreadList />
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* chatbox mobile */}
      {isMobile && (
        <Drawer isOpen={isChatOpen} placement="bottom" onClose={onChatToggle}>
          <DrawerOverlay />
          <DrawerContent bgColor={bgColor} h={windowHeight - 50}>
            <DrawerCloseButton />
            <DrawerHeader bg={drawerColor} color={"white"}>
              AI 占卜
            </DrawerHeader>
            <DrawerBody bg={drawerColor} pt={0} px={2} pb={2}>
              <ChatBox
                started={divinationStarted}
                setStarted={setDivinationStarted}
                messages={divinationMessages}
                setMessages={setDivinationMessages}
                divinationElements={{
                  question,
                  spread: spread!,
                  cards: currentCardInfos,
                }}
              />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      )}

      <SpreadInfo
        name={name as string}
        guide={guide as string}
        description={description as string}
        isOpen={isDialogOpen}
        onClose={onDialogClose}
        link=""
      />
    </>
  );
};

export default CommonBackground;

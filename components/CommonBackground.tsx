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
import spreads from "../data/spreads.json";
import useWindowHeight from "../hooks/useWindowHeight";
import useWindowWidth from "../hooks/useWindowWidth";
import AIButton from "./AIButton";
import ChatBox from "./Chat/ChatBox";
import ModeChangeButton from "./ModeChangeButton";
import Question from "./Question";
import SpreadInfo from "./SpreadInfo";
import SpreadList from "./SpreadList";

const CommonBackground = ({
  children,
  onReload,
}: {
  children: ReactNode;
  onReload: () => void;
}) => {
  const router = useRouter();

  const path = router.pathname;
  const type = path.split("/")[2];
  const spreadsOfType = spreads.find((spreadType) => spreadType.route === type);
  const spread = spreadsOfType!.spreads.find((spread) => spread.link === path);

  const { name, guide, description } = spread!;

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

  const isMobile = useWindowWidth() < 768;

  const windowHeight = useWindowHeight() - 1;

  const bgColor = useColorModeValue("#FFFFF0", "gray.800");

  function handleReload() {
    onReload();
    onQuestionOpen();
  }

  useEffect(() => {
    handleReload();
  }, []);

  return (
    <>
      <Head>
        <title>占卜</title>
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
              <Question isOpen={isQuestionOpen} onClose={onQuestionClose} />
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

          {isMobile || (
            <AIButton
              position={"absolute"}
              bottom={120}
              right={50}
              highlighted={isChatOpen}
              onClick={onChatToggle}
            />
          )}
          <ModeChangeButton position={"absolute"} bottom={50} right={50} />
        </Flex>

        {/* chatbox */}
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
            {isChatOpen && <ChatBox />}
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

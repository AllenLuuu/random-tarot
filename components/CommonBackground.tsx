import Head from "next/head";
import {
  Flex,
  HStack,
  IconButton,
  Text,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import {
  ArrowBackIcon,
  HamburgerIcon,
  QuestionOutlineIcon,
} from "@chakra-ui/icons";
import Link from "next/link";
import { ReactNode } from "react";
import SpreadInfo from "./SpreadInfo";
import SpreadList from "./SpreadList";

const CommonBackground = ({
  name,
  guide,
  description,
  children,
}: {
  name: string;
  guide: string;
  description: string;
  children: ReactNode;
}) => {
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
  return (
    <>
      <Head>
        <title>占卜</title>
        <link rel="icon" href="./hexagram-1.svg" style={{ color: "red" }} />
      </Head>

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
          <Text fontSize="xl">{name}</Text>
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

      {children}

      <Drawer isOpen={isDrawerOpen} placement="right" onClose={onDrawerClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>选择牌阵</DrawerHeader>
          <DrawerBody p={0}>
            <SpreadList />
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <SpreadInfo
        name={name}
        guide={guide}
        description={description}
        isOpen={isDialogOpen}
        onClose={onDialogClose}
        link=""
      />
    </>
  );
};

export default CommonBackground;

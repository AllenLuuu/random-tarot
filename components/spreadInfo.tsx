import {
  Button,
  Heading,
  Img,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";

interface params {
  name: string;
  guide: string;
  description: string;
  link: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function SpreadInfo({
  name,
  guide,
  description,
  link,
  isOpen,
  onClose,
}: params) {
  let confirmButton: JSX.Element;
  if (link) {
    confirmButton = (
      <Link href={{ pathname: link, query: { name, guide, description } }}>
        <Button colorScheme="teal" mr={3}>
          就它了
        </Button>
      </Link>
    );
  } else {
    confirmButton = <></>;
  }

  return (
    <Modal
      isCentered
      onClose={onClose}
      isOpen={isOpen}
      motionPreset="slideInBottom"
      size="xl"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {guide ? (
            <VStack align={"flex-start"} padding={"2em"}>
              <Img objectFit="contain" src={guide}></Img>
              <Heading fontSize="lg">简介: </Heading>
              <Text>{description}</Text>
            </VStack>
          ) : (
            <VStack align={"flex-start"} padding={"2em"}>
              <Heading fontSize="lg">简介: </Heading>
              <Text>{description}</Text>
            </VStack>
          )}
        </ModalBody>
        <ModalFooter>
          {confirmButton}
          <Button variant="ghost" onClick={onClose}>
            关闭
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

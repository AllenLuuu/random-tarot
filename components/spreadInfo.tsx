import {
  Button,
  HStack,
  Img,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
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
            <HStack>
              <Img objectFit="contain" boxSize="500px" src={guide}></Img>
              <Text>{description}</Text>
            </HStack>
          ) : (
            <Text>{description}</Text>
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

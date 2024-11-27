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
  useColorModeValue,
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
  const confirmButton = (
    <Link href={{ pathname: link }}>
      <Button colorScheme="teal" mr={3}>
        就它了
      </Button>
    </Link>
  );

  const bgColor = useColorModeValue("#FFFFF0", "gray.800");
  const buttonHoverColor = useColorModeValue("#EEEEE0", "gray.700");
  const buttonActiveColor = useColorModeValue("#DDDDD0", "gray.600");

  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      motionPreset="slideInBottom"
      size="xl"
    >
      <ModalOverlay />
      <ModalContent bg={bgColor}>
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
          {link && confirmButton}
          <Button
            variant="ghost"
            _hover={{ bg: buttonHoverColor }}
            _active={{ bg: buttonActiveColor }}
            onClick={onClose}
          >
            关闭
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

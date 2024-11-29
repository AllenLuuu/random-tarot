import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { KeyboardEventHandler } from "react";

export default function Question({
  question,
  isOpen,
  setQuestion,
  onClose,
}: {
  question: string;
  isOpen: boolean;
  setQuestion: (question: string) => void;
  onClose: () => void;
}) {
  const handleInputChange = ({ target }: { target: HTMLInputElement }) =>
    setQuestion(target!.value);

  const isError = question === "";

  function handleConfirm() {
    if (!isError) {
      onClose();
    }
  }

  const handleKeyUp: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      handleConfirm();
    }
  };

  const bgColor = useColorModeValue("#FFFFF0", "gray.800");
  const buttonColor = useColorModeValue("#F3F3E3", "gray.750");
  const buttonHoverColor = useColorModeValue("#EEEEE0", "gray.700");
  const buttonActiveColor = useColorModeValue("#DDDDD0", "gray.600");

  return (
    <>
      <Text fontSize={"xl"}>{question}</Text>

      <Modal
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
        size="xl"
      >
        <ModalOverlay />
        <ModalContent bg={bgColor}>
          <ModalHeader>请输入你要占卜的问题</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isInvalid={isError}>
              <Input
                type={"text"}
                value={question}
                onChange={handleInputChange}
                onKeyUp={handleKeyUp}
              />
              {!isError ? (
                <FormHelperText>记得抽牌时在心里默念问题。</FormHelperText>
              ) : (
                <FormErrorMessage>请输入问题</FormErrorMessage>
              )}
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={handleConfirm}
              bgColor={buttonColor}
              _hover={{ bgColor: buttonHoverColor }}
              _active={{ bgColor: buttonActiveColor }}
            >
              确定
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

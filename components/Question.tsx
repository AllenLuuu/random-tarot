import { EventHandler, KeyboardEventHandler, useState } from "react";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";

export default function Question({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [question, setQuestion] = useState("");

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
  }

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
        <ModalContent>
          {/* <ModalHeader>请输入你要占卜的问题</ModalHeader> */}
          <ModalCloseButton />
          <ModalBody>
            <FormControl isInvalid={isError}>
              <FormLabel>请输入你要占卜的问题</FormLabel>
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
            <Button onClick={handleConfirm}>确定</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

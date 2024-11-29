import {
  BoxProps,
  Flex,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ChatRole, DivinationElements, Message } from "../../types";
import {
  addMessage,
  constructDivinationMessage,
  MessageAddRes,
} from "../../utils/message";
import { SendIcon } from "./SendIcon";

export default function ChatInput({
  messages,
  divinationElements,
  setMessages,
  ...props
}: BoxProps & {
  messages: Message[];
  divinationElements: DivinationElements;
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
}) {
  const themeColor = useColorModeValue("teal.400", "teal.300");
  const bgColor = useColorModeValue("#FFFFF8", "gray.900");

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async (messages: Message[], callback: () => void) => {
    const messageReader = await addMessage(messages);
    setMessages((prev) => [
      ...prev,
      {
        role: ChatRole.Assistant,
        content: "",
      },
    ]);

    let buffer = "";
    let currentMessage = "";
    const read = async (reader: ReadableStreamDefaultReader<Uint8Array>) => {
      const { done, value } = await reader.read();
      if (done) {
        callback();
        return;
      }
      const text = new TextDecoder("utf-8").decode(value);
      buffer += text;
      while (buffer) {
        const index = buffer.indexOf("<@$#$@>");
        if (index === -1) {
          break;
        }
        const msgObj = buffer.slice(0, index);
        buffer = buffer.slice(index + 7);
        const msg = JSON.parse(msgObj) as MessageAddRes;
        currentMessage += msg.content;
        setMessages((prev) => {
          const newMessages = [...prev];
          newMessages.pop();
          newMessages.push({
            role: ChatRole.Assistant,
            content: currentMessage,
          });
          return newMessages;
        });
      }
      read(reader);
    };

    if (messageReader) {
      read(messageReader);
    }
  };

  const handleSend = async () => {
    if (message) {
      const divinationMessage = constructDivinationMessage(divinationElements);
      const messagesToSend = [
        divinationMessage,
        ...messages,
        { role: ChatRole.User, content: message },
      ];
      setMessages((prev) => [
        ...prev,
        { role: ChatRole.User, content: message },
      ]);
      setMessage("");
      setLoading(true);

      sendMessage(messagesToSend, () => setLoading(false));
    }
  };

  let started = false;
  useEffect(() => {
    if (!started && messages.length === 0) {
      const divinationMessage = constructDivinationMessage(divinationElements);
      setLoading(true);
      sendMessage([divinationMessage], () => setLoading(false));
    }

    return () => {
      started = true;
    };
  }, []);

  return (
    <Flex
      {...props}
      bgColor={bgColor}
      alignItems={"center"}
      p={4}
      pr={2}
      gap={2}
      border={"2px solid"}
      borderColor={themeColor}
      borderRadius={8}
    >
      <input
        style={{
          flexGrow: 1,
          background: "none",
          outline: "none",
        }}
        placeholder="说出内心的声音"
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key == "Enter" && !e.shiftKey && !loading) {
            e.preventDefault();
            handleSend();
          }
        }}
        value={message}
      ></input>
      <IconButton
        aria-label="send"
        background={"transparent"}
        icon={<SendIcon />}
        isLoading={loading}
        onClick={handleSend}
      />
    </Flex>
  );
}

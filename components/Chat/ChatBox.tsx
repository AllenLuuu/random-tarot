import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";
import ChatInput from "./ChatInput";
import ChatMessage, { ChatRole } from "./ChatMessage";

export default function ChatBox() {
  const textColor = useColorModeValue("black", "white");
  const bgColor = useColorModeValue("#FFFFF8", "#171923");
  const themeColor = useColorModeValue("teal.300", "teal.400");

  const [messages, setMessages] = useState([]);

  return (
    <Box
      height={"100%"}
      borderWidth={5}
      borderColor={themeColor}
      bg={bgColor}
      color={textColor}
    >
      <Flex
        width={"100%"}
        height={"50px"}
        justify={"center"}
        alignItems={"center"}
        bg={themeColor}
      >
        AI 占卜
      </Flex>
      <Box position={"relative"} height={"calc(100% - 50px)"}>
        <Box
          width={"100%"}
          height={"100%"}
          overflowY={"auto"}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          p={4}
        >
          {(
            messages as {
              role: ChatRole;
              message: string;
            }[]
          ).map((message, index) => (
            <ChatMessage
              role={message.role}
              message={message.message}
              key={index}
            />
          ))}
          <Box h={"80px"}></Box>
        </Box>
        <Box
          position={"absolute"}
          bottom={"0"}
          w={"100%"}
          h={"90px"}
          bg={`linear-gradient(transparent 0%, ${bgColor} 30% , ${bgColor} 100%)`}
        />
        <ChatInput
          w={"calc(100% - 30px)"}
          ml={15}
          position={"absolute"}
          height={"50px"}
          bottom={"15px"}
          onSend={(message) => console.log(message)}
        />
      </Box>
    </Box>
  );
}

import {
  BoxProps,
  Flex,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { SendIcon } from "./SendIcon";

export default function ChatInput({
  onSend,
  ...props
}: BoxProps & {
  onSend: (message: string) => void;
}) {
  const themeColor = useColorModeValue("teal.300", "teal.400");
  const bgColor = useColorModeValue("#FFFFF8", "gray.900");

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = () => {
    onSend(message);
    setMessage("");
  };

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

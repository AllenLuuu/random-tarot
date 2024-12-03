import {
  Box,
  Button,
  Center,
  Flex,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { DivinationElements, Message } from "../../types";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";

export default function ChatBox({
  outlined = false,
  started,
  setStarted,
  messages,
  setMessages,
  divinationElements,
}: {
  outlined?: boolean;
  started: boolean;
  messages: Message[];
  setStarted: React.Dispatch<React.SetStateAction<boolean>>;
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  divinationElements: DivinationElements;
}) {
  const toast = useToast();
  const textColor = useColorModeValue("black", "white");
  const titleColor = useColorModeValue("white", "black");
  const bgColor = useColorModeValue("#FFFFF8", "#171923");
  const themeColor = useColorModeValue("teal.400", "teal.300");

  const messageEndRef = useRef<HTMLDivElement>(null);

  // const [started, setStarted] = useState(false);

  // const [messages, setMessages] = useState<Message[]>([]);

  const handleClickStart = () => {
    const flipStates = divinationElements.cards.map((c) => c.flipped);
    const hasUnflipped = flipStates.some((state) => !state);
    if (divinationElements.question.trim() === "") {
      toast({
        title: "请先输入问题再进行占卜哦~",
        status: "warning",
        duration: 1000,
        position: "top",
        containerStyle: {
          paddingTop: "20px",
        },
      });
    } else if (hasUnflipped) {
      toast({
        title: "请先翻开所有卡牌再进行占卜哦~",
        status: "warning",
        duration: 1000,
        position: "top",
        containerStyle: {
          paddingTop: "20px",
        },
      });
    } else {
      setStarted(true);
    }
  };

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <Flex
      height={"100%"}
      borderWidth={outlined ? "5px" : "0px"}
      borderTopWidth={0}
      borderColor={themeColor}
      bg={bgColor}
      color={textColor}
      flexDirection={"column"}
    >
      {outlined && (
        <Flex
          width={"100%"}
          flexBasis={"50px"}
          flexShrink={0}
          justify={"center"}
          alignItems={"center"}
          color={titleColor}
          bg={themeColor}
          fontWeight={"bold"}
          fontSize={"lg"}
        >
          AI 占卜
        </Flex>
      )}
      <Box position={"relative"} flexGrow={1} overflow={"hidden"}>
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
          {messages.map((message, index) => (
            <ChatMessage
              role={message.role}
              message={message.content}
              key={index}
            />
          ))}
          <Box ref={messageEndRef} h={"80px"}></Box>
        </Box>
        <Box
          position={"absolute"}
          bottom={"0"}
          w={"100%"}
          h={"90px"}
          bg={`linear-gradient(transparent 0%, ${bgColor} 30% , ${bgColor} 100%)`}
        />
        {started ? (
          <ChatInput
            w={"calc(100% - 30px)"}
            ml={15}
            position={"absolute"}
            height={"50px"}
            bottom={"15px"}
            messages={messages}
            setMessages={setMessages}
            divinationElements={divinationElements}
          />
        ) : (
          <Center w={"100%"} position={"absolute"} bottom={"50px"}>
            <Button onClick={handleClickStart} colorScheme="teal" size={"lg"}>
              开始占卜
            </Button>
          </Center>
        )}
      </Box>
    </Flex>
  );
}

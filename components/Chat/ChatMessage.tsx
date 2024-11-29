import {
  Box,
  Flex,
  Heading,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
  useColorModeValue,
} from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import { ChatRole } from "../../types";
import { HatIcon } from "./HatIcon";
import { UserIcon } from "./UserIcon";

export default function ChatMessage({
  message,
  role,
}: {
  message: string;
  role: ChatRole;
}) {
  const bgColor = useColorModeValue("#f3ebe2", "#343434");
  const iconColor = useColorModeValue("#282828", "#66707a");
  return (
    <Flex
      flexDirection={role === ChatRole.Assistant ? "row" : "row-reverse"}
      gap={3}
      mb={6}
    >
      {role === ChatRole.Assistant ? (
        <HatIcon fontSize={"1.5em"} color={iconColor} mt={3} />
      ) : (
        <UserIcon fontSize={"1.4em"} color={iconColor} mt={3} />
      )}
      <Box
        maxW={"90%"}
        padding={"1em"}
        borderRadius={8}
        bg={bgColor}
        whiteSpace={"normal"}
      >
        <ReactMarkdown
          components={{
            ol({ children }) {
              return <OrderedList ml={"2em"}>{children}</OrderedList>;
            },
            ul({ children }) {
              return <UnorderedList ml={"2em"}>{children}</UnorderedList>;
            },
            li({ children }) {
              return <ListItem m="0.75em 0">{children}</ListItem>;
            },
            h1({ children }) {
              return (
                <Heading
                  _notFirst={{ marginTop: "1.25em" }}
                  _notLast={{ marginBottom: "0.75em" }}
                  as={"div"}
                  size={"xl"}
                >
                  {children}
                </Heading>
              );
            },
            h2({ children }) {
              return (
                <Heading
                  _notFirst={{ marginTop: "1.25em" }}
                  _notLast={{ marginBottom: "0.75em" }}
                  as={"div"}
                  size={"lg"}
                >
                  {children}
                </Heading>
              );
            },
            h3({ children }) {
              return (
                <Heading
                  _notFirst={{ marginTop: "1.25em" }}
                  _notLast={{ marginBottom: "0.75em" }}
                  as={"div"}
                  size={"md"}
                >
                  {children}
                </Heading>
              );
            },
            h4({ children }) {
              return (
                <Heading
                  _notFirst={{ marginTop: "1.25em" }}
                  _notLast={{ marginBottom: "0.75em" }}
                  as={"div"}
                  size={"sm"}
                >
                  {children}
                </Heading>
              );
            },
            h5({ children }) {
              return (
                <Heading
                  _notFirst={{ marginTop: "1.25em" }}
                  _notLast={{ marginBottom: "0.75em" }}
                  as={"div"}
                  size={"xs"}
                >
                  {children}
                </Heading>
              );
            },
            h6({ children }) {
              return (
                <Heading
                  _notFirst={{ marginTop: "1.25em" }}
                  _notLast={{ marginBottom: "0.75em" }}
                  as={"div"}
                  size={"xs"}
                >
                  {children}
                </Heading>
              );
            },
            p({ children }) {
              return (
                <Text
                  _notFirst={{ marginTop: "1em" }}
                  _notLast={{ marginBottom: "1em" }}
                  as={"div"}
                >
                  {children}
                </Text>
              );
            },
          }}
        >
          {message}
        </ReactMarkdown>
      </Box>
    </Flex>
  );
}

import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Heading,
  HStack,
  Img,
  Link,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import cards from "../../data/cards.json";
import useIsMobile from "../../hooks/useIsMobile";
import { imgPrefix } from "../../utils/const";

export default function CardDetail() {
  const router = useRouter();
  const { name } = router.query;
  const card = cards.find(
    (card) =>
      card.name.replace(/\s+/g, "-").toLowerCase() ===
      (typeof name === "string" ? name : "")
  );
  const isMobile = useIsMobile();

  const textPurple = useColorModeValue("purple.600", "purple.300");

  if (!card) return <Box p={8}>未找到该牌</Box>;

  return (
    <Box p={8} maxW="800px" mx="auto">
      <Heading mb={6} textAlign="center">
        {card.name + " " + card.translation}
      </Heading>
      {isMobile ? (
        <VStack align="flex-start" spacing={4}>
          <Img
            objectFit="contain"
            boxSize="240px"
            src={imgPrefix + card.link}
            borderRadius={8}
            alignSelf="center"
          />
          <Heading fontSize="lg">简介: </Heading>
          <Text>{card.description}</Text>
          <Heading fontSize="lg">正位: </Heading>
          <Text>{card.normal}</Text>
          <Heading fontSize="lg">逆位: </Heading>
          <Text>{card.reversed}</Text>
          <Heading fontSize="lg">详细介绍: </Heading>
          <Link href={card.detail} isExternal color={textPurple}>
            点此查看 <ExternalLinkIcon mx="2px" />
          </Link>
        </VStack>
      ) : (
        <HStack gap="32px" align="flex-start">
          <Img
            objectFit="contain"
            boxSize="240px"
            src={imgPrefix + card.link}
            borderRadius={8}
          />
          <VStack align="flex-start" spacing={4} flex={1}>
            <Heading fontSize="lg">简介: </Heading>
            <Text>{card.description}</Text>
            <Heading fontSize="lg">正位: </Heading>
            <Text>{card.normal}</Text>
            <Heading fontSize="lg">逆位: </Heading>
            <Text>{card.reversed}</Text>
            <Heading fontSize="lg">详细介绍: </Heading>
            <Link href={card.detail} isExternal color={textPurple}>
              点此查看 <ExternalLinkIcon mx="2px" />
            </Link>
          </VStack>
        </HStack>
      )}
      <Button
        mt={8}
        onClick={() => router.back()}
        colorScheme="purple"
        variant="outline"
      >
        返回
      </Button>
    </Box>
  );
}

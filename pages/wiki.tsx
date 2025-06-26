import {
  Box,
  Heading,
  Image,
  SimpleGrid,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import HomeButton from "../components/HomeButton";
import ModeChangeButton from "../components/ModeChangeButton";
import cards from "../data/cards.json";
import useIsMobile from "../hooks/useIsMobile";
import { imgPrefix } from "../utils/const";

// 分类规则
const categories = [
  {
    key: "major",
    name: "大阿卡纳牌",
    match: (name: string) =>
      /愚人|魔术师|女祭司|女皇|皇帝|教皇|恋人|战车|力量|隐士|命运之轮|正义|倒吊人|死亡|节制|魔鬼|高塔|星星|月亮|太阳|审判|世界/.test(
        name
      ),
  },
  { key: "wands", name: "权杖", match: (name: string) => /权杖/.test(name) },
  { key: "cups", name: "圣杯", match: (name: string) => /圣杯/.test(name) },
  { key: "swords", name: "宝剑", match: (name: string) => /宝剑/.test(name) },
  {
    key: "pentacles",
    name: "星币",
    match: (name: string) => /星币/.test(name),
  },
];

// 按分类分组
const grouped = categories.map((cat) => ({
  ...cat,
  cards: cards.filter((card) => cat.match(card.translation)),
}));

export default function Wiki() {
  const isMobile = useIsMobile();
  const router = useRouter();
  const textPurple = useColorModeValue("purple.600", "purple.300");
  return (
    <Box p={8} maxW="1200px" mx="auto">
      <Heading mb={8} textAlign="center">
        牌义一览
      </Heading>
      {grouped.map((cat) => (
        <Box key={cat.key} mb={12}>
          <Heading size="lg" mb={4} color={textPurple}>
            {cat.name}
          </Heading>
          <SimpleGrid columns={[2, 4, 6]} spacing={4}>
            {cat.cards.map((card) => (
              <VStack
                key={card.name}
                cursor="pointer"
                borderRadius="md"
                _hover={{}}
                p={2}
                onClick={() =>
                  router.push(
                    `/wiki/${card.name.replace(/\s+/g, "-").toLowerCase()}`
                  )
                }
              >
                <Image
                  src={imgPrefix + card.link}
                  alt={card.name}
                  boxSize="100px"
                  objectFit="contain"
                  borderRadius="md"
                />
                <Text
                  fontWeight="bold"
                  fontSize="md"
                  textAlign="center"
                  whiteSpace={"pre-wrap"}
                >
                  {card.name + "\n" + card.translation}
                </Text>
              </VStack>
            ))}
          </SimpleGrid>
        </Box>
      ))}
      <Box height={"60px"} />
      <HomeButton
        position={"fixed"}
        bottom={isMobile ? "80px" : "120px"}
        right={isMobile ? "20px" : "50px"}
      />
      <ModeChangeButton
        position={"fixed"}
        bottom={isMobile ? "20px" : "50px"}
        right={isMobile ? "20px" : "50px"}
      />
    </Box>
  );
}

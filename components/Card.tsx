import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Heading,
  HStack,
  Img,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import { animated, useSpring } from "@react-spring/web";
import cards from "../data/cards.json";
import { imgPrefix } from "../utils/const";

const AnimatedImg = animated(Img);

function Card({
  scale,
  index,
  reversed,
  flipped,
  showInfo,
  rotate,
  closeInfo,
  onClick,
}: {
  scale: {
    x: number;
    y: number;
  };
  index: number;
  reversed: boolean;
  flipped: boolean;
  showInfo: boolean;
  rotate?: number;
  closeInfo: () => void;
  onClick: () => void;
}) {
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotate(${rotate ? rotate : 0}deg) rotateY(${
      flipped ? 180 : 0
    }deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <>
      <Box onClick={onClick}>
        <AnimatedImg
          style={{
            opacity: opacity.to((o) => 1 - o),
            transform,
            borderRadius: "4px",
            position: "fixed",
            cursor: "pointer",
            marginLeft: -0.5 * scale.x,
            marginTop: -0.5 * scale.y,
          }}
          w={scale.x}
          h={scale.y}
          src="https://www.allenluuu.com//static/random-tarot/card-backs/card_back_4.webp"
          borderRadius={4}
          alt="card-back"
        />
        <AnimatedImg
          style={{
            opacity,
            transform,
            rotateY: reversed ? "0deg" : "180deg",
            rotateX: reversed ? "180deg" : "0deg",
            position: "fixed",
            cursor: "pointer",
            marginLeft: -0.5 * scale.x,
            marginTop: -0.5 * scale.y,
          }}
          w={scale.x}
          h={scale.y}
          src={imgPrefix + cards[index].link}
          alt={cards[index].name}
        />
      </Box>

      <Modal
        onClose={closeInfo}
        isOpen={showInfo}
        motionPreset="slideInBottom"
        size="xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {cards[index].name + " " + cards[index].translation}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <HStack gap="20px">
              <Img
                objectFit={"contain"}
                boxSize="200px"
                src={imgPrefix + cards[index].link}
              ></Img>
              <VStack align="flex-start">
                <Heading fontSize="lg">简介: </Heading>
                <Text>{cards[index].description}</Text>
                <Heading fontSize="lg">正位: </Heading>
                <Text>{cards[index].normal}</Text>
                <Heading fontSize="lg">逆位: </Heading>
                <Text>{cards[index].reversed}</Text>
                <Heading fontSize="lg">详细介绍: </Heading>
                <Link href={cards[index].detail} isExternal>
                  点此查看
                  <ExternalLinkIcon mx="2px" />
                </Link>
              </VStack>
            </HStack>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={closeInfo}>
              关闭
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Card;

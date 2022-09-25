import { Box, useDisclosure } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import Card from "../../../components/Card";
import CommonBackground from "../../../components/CommonBackground";
import cards from "../../../data/cards.json";

const Single: NextPage = () => {
  const router = useRouter();
  const { name, guide, description } = router.query;

  const [randomIndex, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [reversed, setReversed] = useState(false);
  const {isOpen: showInfo, onOpen: openInfo, onClose: closeInfo} = useDisclosure();

  function onReload() {
    setFlipped(false);
  }

  function onCardClick() {
    if (!flipped) {
      setIndex(Math.floor(Math.random() * cards.length));
      setReversed(Math.random() > 0.5 ? true : false);
      setFlipped(true);
    } else {
      openInfo();
    }
  }

  return (
    <>
      <CommonBackground
        name={name as string}
        guide={guide as string}
        description={description as string}
        onReload={onReload}
      >
        <Box position={"fixed"} top={"50%"} left={"50%"}>
          <Card
            size="large"
            index={randomIndex}
            flipped={flipped}
            reversed={reversed}
            showInfo={showInfo}
            closeInfo={closeInfo}
            onClick={onCardClick}
          />
        </Box>
      </CommonBackground>
    </>
  );
};

export default Single;

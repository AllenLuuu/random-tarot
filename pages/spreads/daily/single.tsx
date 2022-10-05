import { Box, useDisclosure } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import Card from "../../../components/Card";
import CommonBackground from "../../../components/CommonBackground";
import cards from "../../../data/cards.json";
import useInit from "../../../hooks/useInit";

const Single: NextPage = () => {
  const router = useRouter();
  const { name, guide, description } = router.query;

  // const [randomIndex, setIndex] = useState(0);
  // const [flipped, setFlipped] = useState(false);
  // const [reversed, setReversed] = useState(false);
  // const {
  //   isOpen: showInfo,
  //   onOpen: openInfo,
  //   onClose: closeInfo,
  // } = useDisclosure();

  // function onReload() {
  //   setFlipped(false);
  // }

  // function onCardClick() {
  //   if (!flipped) {
  //     setIndex(Math.floor(Math.random() * cards.length));
  //     setReversed(Math.random() > 0.5 ? true : false);
  //     setFlipped(true);
  //   } else {
  //     openInfo();
  //   }
  // }

  const {
    indexes,
    states,
    reverses,
    infoShown,
    onReload,
    onCardClick,
    closeInfo,
  } = useInit(1);

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
            size="xlarge"
            index={indexes[0]}
            flipped={states[0]}
            reversed={reverses[0]}
            showInfo={infoShown[0]}
            closeInfo={closeInfo}
            onClick={() => onCardClick(0)}
          />
        </Box>
      </CommonBackground>
    </>
  );
};

export default Single;

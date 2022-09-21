import { Box, Flex, HStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import CommonBackground from "../../../components/CommonBackground";
import Card from "../../../components/Card";
import cards from "../../../data/cards.json";

const Single: NextPage = () => {
  const router = useRouter();
  const { name, guide, description } = router.query;

  const [states, setStates] = useState([false, false, false]);
  const [indexes, setIndexes] = useState([0, 0, 0]);
  const [reverses, setReverses] = useState([false, false, false]);
  const [infoShown, setInfoShown] = useState([false, false, false]);

  function onReload() {
    setStates([false, false, false]);
  }

  function setCardIndex(index: number) {
    const temp = [...indexes];
    let duplicated = true;
    let tempIndex!: number;
    while (duplicated) {
      tempIndex = Math.floor(Math.random() * cards.length);
      let samei = indexes.findIndex((i) => i === tempIndex);
      if (samei != -1 && states[samei] === true) {
        duplicated = true;
      } else {
        duplicated = false;
      }
    }
    temp[index] = tempIndex;
    setIndexes(temp);
  }

  function onCardClick(index: number) {
    if (!states[index]) {
      setCardIndex(index);
      let temp = [...reverses];
      temp[index] = Math.random() > 0.5 ? true : false;
      setReverses(temp);
      temp = [...states];
      temp[index] = true;
      setStates(temp);
    } else {
      const temp = [...infoShown];
      temp[index] = true;
      setInfoShown(temp);
    }
  }

  function closeInfo() {
    setInfoShown([false, false, false]);
  }

  return (
    <>
      <CommonBackground
        name={name as string}
        guide={guide as string}
        description={description as string}
        onReload={onReload}
      >
        <Box position={"fixed"} top={"50%"} left={"calc(50% - 165px)"}>
          <Card
            size="large"
            index={indexes[0]}
            flipped={states[0]}
            reversed={reverses[0]}
            showInfo={infoShown[0]}
            closeInfo={closeInfo}
            onClick={() => onCardClick(0)}
          />
        </Box>

        <Box position={"fixed"} top={"50%"} left={"50%"}>
          <Card
            size="large"
            index={indexes[1]}
            flipped={states[1]}
            reversed={reverses[1]}
            showInfo={infoShown[1]}
            closeInfo={closeInfo}
            onClick={() => onCardClick(1)}
          />
        </Box>

        <Box position={"fixed"} top={"50%"} left={"calc(50% + 165px)"}>
          <Card
            size="large"
            index={indexes[2]}
            flipped={states[2]}
            reversed={reverses[2]}
            showInfo={infoShown[2]}
            closeInfo={closeInfo}
            onClick={() => onCardClick(2)}
          />
        </Box>
      </CommonBackground>
    </>
  );
};

export default Single;

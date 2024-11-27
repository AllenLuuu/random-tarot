import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Card from "../../../components/Card";
import CommonBackground from "../../../components/CommonBackground";
import useCardSize from "../../../hooks/useCardSize";
import useInit from "../../../hooks/useInit";

const ThreeCard: NextPage = () => {
  const {
    indexes,
    states,
    reverses,
    infoShown,
    onReload,
    onCardClick,
    closeInfo,
  } = useInit(3);

  const scale = useCardSize("large", 3, 0, 50);

  return (
    <>
      <CommonBackground onReload={onReload}>
        <Box
          position={"absolute"}
          top={"50%"}
          left={`calc(50% - ${scale.x + 10}px)`}
        >
          <Card
            scale={scale}
            index={indexes[0]}
            flipped={states[0]}
            reversed={reverses[0]}
            showInfo={infoShown[0]}
            closeInfo={closeInfo}
            onClick={() => onCardClick(0)}
          />
        </Box>

        <Box position={"absolute"} top={"50%"} left={"50%"}>
          <Card
            scale={scale}
            index={indexes[1]}
            flipped={states[1]}
            reversed={reverses[1]}
            showInfo={infoShown[1]}
            closeInfo={closeInfo}
            onClick={() => onCardClick(1)}
          />
        </Box>

        <Box
          position={"absolute"}
          top={"50%"}
          left={`calc(50% + ${scale.x + 10}px)`}
        >
          <Card
            scale={scale}
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

export default ThreeCard;

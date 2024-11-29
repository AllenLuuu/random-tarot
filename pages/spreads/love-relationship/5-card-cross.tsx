import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Card from "../../../components/Card";
import CommonBackground from "../../../components/CommonBackground";
import useCardSize from "../../../hooks/useCardSize";
import useInit from "../../../hooks/useInit";

const FiveCardCross: NextPage = () => {
  const {
    indexes,
    flipStates,
    reverses,
    infoShown,
    onReload,
    onCardClick,
    closeInfo,
  } = useInit(5);

  const scale = useCardSize("medium", 3, 0, 50);

  return (
    <>
      <CommonBackground
        onReload={onReload}
        cardIndexes={indexes}
        flipStates={flipStates}
        reverses={reverses}
      >
        {/* 1 */}
        <Box
          position={"absolute"}
          top={"50%"}
          left={`calc(50% - ${scale.x + 10}px)`}
        >
          <Card
            scale={scale}
            index={indexes[0]}
            flipped={flipStates[0]}
            reversed={reverses[0]}
            showInfo={infoShown[0]}
            closeInfo={closeInfo}
            onClick={() => onCardClick(0)}
          />
        </Box>

        {/* 2 */}
        <Box
          position={"absolute"}
          top={"50%"}
          left={`calc(50% + ${scale.x + 10}px)`}
        >
          <Card
            scale={scale}
            index={indexes[1]}
            flipped={flipStates[1]}
            reversed={reverses[1]}
            showInfo={infoShown[1]}
            closeInfo={closeInfo}
            onClick={() => onCardClick(1)}
          />
        </Box>

        {/* 3 */}
        <Box
          position={"absolute"}
          top={`calc(50% - ${scale.y + 10}px)`}
          left={"50%"}
        >
          <Card
            scale={scale}
            index={indexes[2]}
            flipped={flipStates[2]}
            reversed={reverses[2]}
            showInfo={infoShown[2]}
            closeInfo={closeInfo}
            onClick={() => onCardClick(2)}
          />
        </Box>

        {/* 4 */}
        <Box position={"absolute"} top={"50%"} left={"50%"}>
          <Card
            scale={scale}
            index={indexes[3]}
            flipped={flipStates[3]}
            reversed={reverses[3]}
            showInfo={infoShown[3]}
            closeInfo={closeInfo}
            onClick={() => onCardClick(3)}
          />
        </Box>

        {/* 5 */}
        <Box
          position={"absolute"}
          top={`calc(50% + ${scale.y + 10}px)`}
          left={"50%"}
        >
          <Card
            scale={scale}
            index={indexes[4]}
            flipped={flipStates[4]}
            reversed={reverses[4]}
            showInfo={infoShown[4]}
            closeInfo={closeInfo}
            onClick={() => onCardClick(4)}
          />
        </Box>
      </CommonBackground>
    </>
  );
};

export default FiveCardCross;

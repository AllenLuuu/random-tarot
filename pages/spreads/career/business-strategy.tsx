import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Card from "../../../components/Card";
import CommonBackground from "../../../components/CommonBackground";
import useCardSize from "../../../hooks/useCardSize";
import useInit from "../../../hooks/useInit";

const BusinessStrategy: NextPage = () => {
  const {
    indexes,
    states,
    reverses,
    infoShown,
    onReload,
    onCardClick,
    closeInfo,
  } = useInit(10);

  const scale = useCardSize("tiny", 3, 1, 50);

  return (
    <>
      <CommonBackground onReload={onReload}>
        {/* 1 */}
        <Box
          position={"absolute"}
          top={`calc(50% - ${scale.y + 5}px)`}
          left={`50%`}
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

        {/* 2 */}
        <Box
          position={"absolute"}
          top={`calc(50% - ${scale.y + 5}px)`}
          left={`50%`}
        >
          <Card
            scale={scale}
            rotate={90}
            index={indexes[1]}
            flipped={states[1]}
            reversed={reverses[1]}
            showInfo={infoShown[1]}
            closeInfo={closeInfo}
            onClick={() => onCardClick(1)}
          />
        </Box>

        {/* 3 */}
        <Box
          position={"absolute"}
          top={`calc(50% - ${2 * (scale.y + 5)}px)`}
          left={`50%`}
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

        {/* 4 */}
        <Box
          position={"absolute"}
          top={`calc(50% - ${1.5 * (scale.y + 5)}px)`}
          left={`calc(50% - ${0.5 * (scale.x + scale.y) + 10}px)`}
        >
          <Card
            scale={scale}
            index={indexes[3]}
            flipped={states[3]}
            reversed={reverses[3]}
            showInfo={infoShown[3]}
            closeInfo={closeInfo}
            onClick={() => onCardClick(3)}
          />
        </Box>

        {/* 5 */}
        <Box
          position={"absolute"}
          top={`calc(50% - ${1.5 * (scale.y + 5)}px)`}
          left={`calc(50% + ${0.5 * (scale.x + scale.y) + 10}px)`}
        >
          <Card
            scale={scale}
            index={indexes[4]}
            flipped={states[4]}
            reversed={reverses[4]}
            showInfo={infoShown[4]}
            closeInfo={closeInfo}
            onClick={() => onCardClick(4)}
          />
        </Box>

        {/* 6 */}
        <Box
          position={"absolute"}
          top={`calc(50% - ${scale.y + 5}px)`}
          left={`calc(50% - ${scale.x + 0.5 * scale.y + 10}px)`}
        >
          <Card
            scale={scale}
            index={indexes[5]}
            flipped={states[5]}
            reversed={reverses[5]}
            showInfo={infoShown[5]}
            closeInfo={closeInfo}
            onClick={() => onCardClick(5)}
          />
        </Box>

        {/* 7 */}
        <Box
          position={"absolute"}
          top={`calc(50% - ${scale.y + 5}px)`}
          left={`calc(50% + ${scale.x + 0.5 * scale.y + 10}px)`}
        >
          <Card
            scale={scale}
            index={indexes[6]}
            flipped={states[6]}
            reversed={reverses[6]}
            showInfo={infoShown[6]}
            closeInfo={closeInfo}
            onClick={() => onCardClick(6)}
          />
        </Box>

        {/* 8 */}
        <Box position={"absolute"} top={"50%"} left={`50%`}>
          <Card
            scale={scale}
            index={indexes[7]}
            flipped={states[7]}
            reversed={reverses[7]}
            showInfo={infoShown[7]}
            closeInfo={closeInfo}
            onClick={() => onCardClick(7)}
          />
        </Box>

        {/* 9 */}
        <Box
          position={"absolute"}
          top={`calc(50% + ${scale.y + 5}px)`}
          left={`50%`}
        >
          <Card
            scale={scale}
            index={indexes[8]}
            flipped={states[8]}
            reversed={reverses[8]}
            showInfo={infoShown[8]}
            closeInfo={closeInfo}
            onClick={() => onCardClick(8)}
          />
        </Box>

        {/* 10 */}
        <Box
          position={"absolute"}
          top={`calc(50% + ${2 * (scale.y + 5)}px)`}
          left={`50%`}
        >
          <Card
            scale={scale}
            index={indexes[9]}
            flipped={states[9]}
            reversed={reverses[9]}
            showInfo={infoShown[9]}
            closeInfo={closeInfo}
            onClick={() => onCardClick(9)}
          />
        </Box>
      </CommonBackground>
    </>
  );
};

export default BusinessStrategy;

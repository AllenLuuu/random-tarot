import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Card from "../../../components/Card";
import CommonBackground from "../../../components/CommonBackground";
import useCardSize from "../../../hooks/useCardSize";
import useInit from "../../../hooks/useInit";

const JungianArchetypes: NextPage = () => {
  const {
    indexes,
    states,
    reverses,
    infoShown,
    onReload,
    onCardClick,
    closeInfo,
  } = useInit(5);

  const scale = useCardSize("medium", 2, 1, 50);

  return (
    <>
      <CommonBackground onReload={onReload}>
        {/* 2 */}
        <Box position={"fixed"} top={`50%`} left={`50%`}>
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

        {/* 3 */}
        <Box
          position={"fixed"}
          top={`calc(50% - ${0.5 * scale.x + 0.5 * scale.y + 10}px)`}
          left={`calc(50% - ${0.5 * scale.x + 0.5 * scale.y + 10}px)`}
        >
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

        {/* 4 */}
        <Box
          position={"fixed"}
          top={`calc(50% - ${0.5 * scale.x + 0.5 * scale.y + 10}px)`}
          left={`calc(50% + ${0.5 * scale.x + 0.5 * scale.y + 10}px)`}
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

        {/* 5 */}
        <Box
          position={"fixed"}
          top={`calc(50% + ${0.5 * scale.x + 0.5 * scale.y + 10}px)`}
          left={`calc(50% - ${0.5 * scale.x + 0.5 * scale.y + 10}px)`}
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

        {/* 6 */}
        <Box
          position={"fixed"}
          top={`calc(50% + ${0.5 * scale.x + 0.5 * scale.y + 10}px)`}
          left={`calc(50% + ${0.5 * scale.x + 0.5 * scale.y + 10}px)`}
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
      </CommonBackground>
    </>
  );
};

export default JungianArchetypes;

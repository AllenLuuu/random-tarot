import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Card from "../../../components/Card";
import CommonBackground from "../../../components/CommonBackground";
import useCardSize from "../../../hooks/useCardSize";
import useInit from "../../../hooks/useInit";

const Balanced: NextPage = () => {
  const {
    indexes,
    states,
    reverses,
    infoShown,
    onReload,
    onCardClick,
    closeInfo,
  } = useInit(3);

  const scale = useCardSize("large", 2.866, 0.866, 30);

  return (
    <>
      <CommonBackground onReload={onReload}>
        <Box
          position={"absolute"}
          top={`calc(50% - ${0.5 * scale.y + 10}px)`}
          left={"50%"}
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

        <Box
          position={"absolute"}
          top={`calc(50% + ${0.5 * scale.y + 10}px)`}
          left={`calc(50% - ${scale.x + 15}px)`}
        >
          <Card
            scale={scale}
            rotate={60}
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
          top={`calc(50% + ${0.5 * scale.y + 10}px)`}
          left={`calc(50% + ${scale.x + 15}px)`}
        >
          <Card
            scale={scale}
            rotate={-60}
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

export default Balanced;

import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import CommonBackground from "../../../components/CommonBackground";
import Card from "../../../components/Card";
import useInit from "../../../hooks/useInit";
import useCardSize from "../../../hooks/useCardSize";

const ShootingForward: NextPage = () => {
  const router = useRouter();

  const { name, guide, description } = router.query;

  const {
    indexes,
    states,
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
        name={name as string}
        guide={guide as string}
        description={description as string}
        onReload={onReload}
      >
        {/* 1 */}
        <Box
          position={"fixed"}
          top={`calc(50% + ${scale.y + 10}px)`}
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

        {/* 2 */}
        <Box
          position={"fixed"}
          top={`calc(50% + ${scale.y + 10}px)`}
          left={"50%"}
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

        {/* 3 */}
        <Box
          position={"fixed"}
          top={`calc(50% + ${scale.y + 10}px)`}
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

        {/* 4 */}
        <Box
          position={"fixed"}
          top={"50%"}
          left={"50%"}
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
          position={"fixed"}
          top={`calc(50% - ${scale.y + 10}px)`}
          left={"50%"}
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

export default ShootingForward;

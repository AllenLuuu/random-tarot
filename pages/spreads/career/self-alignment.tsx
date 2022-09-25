import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import CommonBackground from "../../../components/CommonBackground";
import Card from "../../../components/Card";
import useInit from "../../../hooks/useInit";

const SelfAlignment: NextPage = () => {
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
  } = useInit(9);

  return (
    <>
      <CommonBackground
        name={name as string}
        guide={guide as string}
        description={description as string}
        onReload={onReload}
      >
        {/* 1 */}
        <Box position={"fixed"} top={"50%"} left={"50%"}>
          <Card
            size="medium"
            index={indexes[0]}
            flipped={states[0]}
            reversed={reverses[0]}
            showInfo={infoShown[0]}
            closeInfo={closeInfo}
            onClick={() => onCardClick(0)}
          />
        </Box>

        {/* 2 */}
        <Box position={"fixed"} top={"calc(50% - 192px)"} left={"50%"}>
          <Card
            size="medium"
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
          top={"calc(50% - 202px)"}
          left={"calc(50% - 165px)"}
        >
          <Card
            size="medium"
            rotate={-45}
            index={indexes[2]}
            flipped={states[2]}
            reversed={reverses[2]}
            showInfo={infoShown[2]}
            closeInfo={closeInfo}
            onClick={() => onCardClick(2)}
          />
        </Box>

        {/* 4 */}
        <Box position={"fixed"} top={"50%"} left={"calc(50% - 115px)"}>
          <Card
            size="medium"
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
          top={"calc(50% + 202px)"}
          left={"calc(50% - 165px)"}
        >
          <Card
            size="medium"
            rotate={+45}
            index={indexes[4]}
            flipped={states[4]}
            reversed={reverses[4]}
            showInfo={infoShown[4]}
            closeInfo={closeInfo}
            onClick={() => onCardClick(4)}
          />
        </Box>

        {/* 6 */}
        <Box position={"fixed"} top={"calc(50% + 192px)"} left={"50%"}>
          <Card
            size="medium"
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
          position={"fixed"}
          top={"calc(50% + 202px)"}
          left={"calc(50% + 165px)"}
        >
          <Card
            size="medium"
            rotate={-45}
            index={indexes[6]}
            flipped={states[6]}
            reversed={reverses[6]}
            showInfo={infoShown[6]}
            closeInfo={closeInfo}
            onClick={() => onCardClick(6)}
          />
        </Box>

        {/* 8 */}
        <Box position={"fixed"} top={"50%"} left={"calc(50% + 115px)"}>
          <Card
            size="medium"
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
          position={"fixed"}
          top={"calc(50% - 202px)"}
          left={"calc(50% + 165px)"}
        >
          <Card
            size="medium"
            rotate={+45}
            index={indexes[8]}
            flipped={states[8]}
            reversed={reverses[8]}
            showInfo={infoShown[8]}
            closeInfo={closeInfo}
            onClick={() => onCardClick(8)}
          />
        </Box>
      </CommonBackground>
    </>
  );
};

export default SelfAlignment;

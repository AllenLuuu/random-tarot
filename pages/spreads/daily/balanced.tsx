import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import CommonBackground from "../../../components/CommonBackground";
import Card from "../../../components/Card";
import useInit from "../../../hooks/useInit";

const Balanced: NextPage = () => {
  const router = useRouter();
  const { name, guide, description } = router.query;
  const {indexes, states, reverses, infoShown, onReload, onCardClick, closeInfo} = useInit();

  return (
    <>
      <CommonBackground
        name={name as string}
        guide={guide as string}
        description={description as string}
        onReload={onReload}
      >
        <Box position={"fixed"} top={"calc(50% - 140px)"} left={"50%"}>
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

        <Box position={"fixed"} top={"calc(50% + 140px)"} left={"calc(50% - 165px)"}>
          <Card
            size="large"
            rotate={60}
            index={indexes[1]}
            flipped={states[1]}
            reversed={reverses[1]}
            showInfo={infoShown[1]}
            closeInfo={closeInfo}
            onClick={() => onCardClick(1)}
          />
        </Box>

        <Box position={"fixed"} top={"calc(50% + 140px)"} left={"calc(50% + 165px)"}>
          <Card
            size="large"
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
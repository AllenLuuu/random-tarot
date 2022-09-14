import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Card from "../../../components/Card";
import CommonBackground from "../../../components/CommonBackground";
import cards from "../../../data/cards.json";

const Single: NextPage = () => {
  const router = useRouter();
  const { name, guide, description } = router.query;

  const index = Math.floor(Math.random() * cards.length);

  return (
    <>
      <CommonBackground
        name={name as string}
        guide={guide as string}
        description={description as string}
      >
        <Box position={"fixed"} top={"50%"} left={"50%"}>
          <Card size="large" link={cards[index].link} />
        </Box>
      </CommonBackground>
    </>
  );
};

export default Single;

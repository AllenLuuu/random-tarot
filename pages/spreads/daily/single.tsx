import type { NextPage } from "next";
import { useRouter } from "next/router";
import CommonBackground from "../../../components/CommonBackground";

const Single: NextPage = () => {
  const router = useRouter();
  const { name, guide, description } = router.query;
  console

  return (
    <>
      <CommonBackground name={name as string} guide={guide as string} description={description as string}>
      </CommonBackground>
    </>
  );
};

export default Single;

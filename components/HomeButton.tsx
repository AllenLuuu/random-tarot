import { Circle, SquareProps, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { GoHomeFill } from "react-icons/go";

export default function HomeButton({ ...props }: SquareProps) {
  const router = useRouter();
  const textColor = useColorModeValue("black", "white");
  const buttonColor = useColorModeValue("#F3F3E3", "gray.700");

  return (
    <Circle
      size={"50px"}
      bg={buttonColor}
      color={textColor}
      onClick={() => router.push("/")}
      _hover={{ cursor: "pointer" }}
      {...props}
    >
      <GoHomeFill />
    </Circle>
  );
}

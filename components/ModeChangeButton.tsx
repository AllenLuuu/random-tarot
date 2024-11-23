import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Circle,
  SquareProps,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

export default function ModeChangeButton({ ...props }: SquareProps) {
  const { colorMode, toggleColorMode } = useColorMode();
  const icon = colorMode === "light" ? <MoonIcon /> : <SunIcon />;
  const textColor = useColorModeValue("black", "white");
  const buttonColor = useColorModeValue("#F3F3E3", "gray.700");

  return (
    <Circle
      size={"50px"}
      bg={buttonColor}
      color={textColor}
      onClick={toggleColorMode}
      _hover={{ cursor: "pointer" }}
      {...props}
    >
      {icon}
    </Circle>
  );
}

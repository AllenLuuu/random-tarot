import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Circle, useColorMode, useColorModeValue } from "@chakra-ui/react";

export default function ModeChangeButton() {
  const { colorMode, toggleColorMode } = useColorMode();
  const icon = colorMode === "light" ? <MoonIcon /> : <SunIcon />;
  const textColor = useColorModeValue("black", "white");
  const bgColor = useColorModeValue("gray.100", "gray.700");

  return (
    <Circle
      size={"50px"}
      bg={bgColor}
      color={textColor}
      onClick={toggleColorMode}
      position="fixed"
      bottom={"50px"}
      right="50px"
      _hover={{ cursor: "pointer" }}
    >
      {icon}
    </Circle>
  );
}

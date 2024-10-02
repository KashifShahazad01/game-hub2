import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Btn_random.webp";
import ColorModeSwitch from "./colorModeSwitch";
import { SearchInput } from "./SearchInput";

export const NavBar = () => {
  return (
    <HStack padding={"10px"}>
      <Image src={logo} boxSize="60px" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

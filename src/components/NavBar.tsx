import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Btn_random.webp";
import ColorModeSwitch from "./colorModeSwitch";
import { SearchInput } from "./SearchInput";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <HStack padding={"10px"}>
      <Link to={"/"}>
        <Image src={logo} boxSize="60px" objectFit={"cover"} />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

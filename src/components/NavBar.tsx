import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
function NavBar() {
  return (
    <HStack padding={"1.5rem"}>
      <Image src={logo} boxSize={"6rem"} />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;

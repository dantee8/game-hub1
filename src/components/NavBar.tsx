import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
function NavBar() {
  return (
    <HStack justifyContent={"space-between"} padding={"1.5rem"}>
      <Image src={logo} boxSize={"6rem"} />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;

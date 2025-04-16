import { HStack, Image, Text, Box } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorMode from "@/ColorMode";
import InputBar from "./InputBar";

interface props {
  onSearch : (search: string) => void;
}

const Navbar = ({onSearch}: props) => {
  return (
    <HStack justifyContent={"space-between"} padding={"10px"}>
      <Image src={logo} boxSize="60px" />
      <Box flex={1}>
        <InputBar onSearch={onSearch}/>
      </Box>
      <ColorMode />
    </HStack>
  );
};

export default Navbar;

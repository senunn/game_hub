import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.png'
import ColorMode from '@/ColorMode'

const Navbar = () => {
  return (
   <HStack>
    <Image src={logo} boxSize="60px"/>
    <Text>NavBar</Text>
    <ColorMode/>
   </HStack>
  )
}

export default Navbar
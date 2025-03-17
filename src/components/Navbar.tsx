import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.png'
import ColorMode from '@/ColorMode'

const Navbar = () => {
  return (
   <HStack justifyContent={'space-between'} padding={'10px'}>
    <Image src={logo} boxSize="60px"/>
    <ColorMode/>
   </HStack>
  )
}

export default Navbar
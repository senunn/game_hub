import { Platform } from '@/hooks/useGame'
import {HStack, Icon} from '@chakra-ui/react'
import { 
    FaWindows,
    FaPlaystation,
    FaXbox,
    FaApple,
    FaLinux,
    FaAndroid,
 } from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'
import { SiNintendo } from 'react-icons/si'
import { BsGlobe } from 'react-icons/bs'
import { IconType } from 'react-icons'

interface props {
    platforms: Platform[]
}
const PlatFormList = ({ platforms }: props ) => {
    const iconMap: {[key: string]: IconType} = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        web: BsGlobe
    }
  return (
    <HStack paddingY={'10px'}>
     {platforms.map(platform => <Icon as={iconMap[platform.slug]} key={platform.id}/>)}
    </HStack>
  )
}

export default PlatFormList
import { Badge } from '@chakra-ui/react';

interface props {
    score: number;
}

const CriticScore = ({score}: props) => {
    let color = score > 75 ? 'green' :  'yellow';
  return (
    <Badge color = {color} fontSize ='14px' paddingX = {2} borderRadius='4px' >{score}</Badge>
  )
}

export default CriticScore
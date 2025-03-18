import { Game } from '@/hooks/useGame'
import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react'
import PlatFormList from './PlatFormList'
import CriticScore from './CriticScore'

interface GameCardProps {
    game: Game
}

const GameCard = ( {game}:GameCardProps ) => {
  return (
    <Card.Root borderRadius={10} overflow='hidden'>
        <Image src={game.background_image}/>
        {console.log("here is image url ",game.background_image)}
        <CardBody bg={'blackAlpha.50'}>
            <Heading>
                {game.name}
            </Heading>
            <HStack justifyContent='space-between'>
              <PlatFormList platforms={game.parent_platforms.map((platform) => platform.platform)}/>
              <CriticScore score={game.metacritic}/>
            </HStack>
        </CardBody> 
    </Card.Root>
  )
}

export default GameCard
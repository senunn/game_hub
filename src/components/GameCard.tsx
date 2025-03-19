import { Game } from '@/hooks/useGame'
import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react'
import PlatFormList from './PlatFormList'
import CriticScore from './CriticScore'
import getCroppedImageUrl from '@/services/image-url'

interface GameCardProps {
    game: Game
}

const GameCard = ( {game}:GameCardProps ) => {
  return (
    <Card.Root borderRadius={10} overflow='hidden' width='300px'>
        <Image src={getCroppedImageUrl(game.background_image)}/>
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
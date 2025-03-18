import { Game } from '@/hooks/useGame'
import {  Card, CardBody, Heading, Image } from '@chakra-ui/react'
import PlatFormList from './PlatFormList'

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
            <PlatFormList platforms={game.parent_platforms.map((platform) => platform.platform)}/>
        </CardBody> 
    </Card.Root>
  )
}

export default GameCard
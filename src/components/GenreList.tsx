import useGere from '@/hooks/useGenre'
import { HStack, Image, ListItem, Text, List, ListRoot } from '@chakra-ui/react';
import React from 'react'

const GenreList = () => {

    const { data } = useGere();

    return (
      <ListRoot>
          {data.map((genre) => (
              <ListItem key={genre.id} paddingY='5px'>
                  <HStack>
                      <Image boxSize="32px" src={genre.image_background} alt={genre.name} borderRadius='5px'/>
                      <Text>{genre.name}</Text>
                  </HStack>
              </ListItem>
          ))}
      </ListRoot>
  );
}

export default GenreList
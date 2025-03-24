import useGere, { Genre } from '@/hooks/useGenre'
import getCroppedImageUrl from '@/services/image-url';
import { HStack, Image, ListItem, Text, List, ListRoot, Spinner, Skeleton, Button } from '@chakra-ui/react';
import React from 'react'
import GenreSkeleton from './GenreSkeleton';


interface props {
onSelectGenre : (genre: Genre) => void;
}

const GenreList = ({onSelectGenre} : props) => {

    const { data , isLoading, error } = useGere();
    const skeletonCount = 14;
    if(error){
        return null;
    }

    const renderGenreSkeleton = () => {
        const skeletons  = [];
        for(let i = 0; i < skeletonCount; i++){
            skeletons.push(
            <ListItem key={i}>
                <GenreSkeleton />
            </ListItem>
            )
        }

        return skeletons;
    }

    return (
      <ListRoot>
          {isLoading && renderGenreSkeleton()}
          {data.map((genre) => (
              <ListItem key={genre.id} paddingY='5px' >
                  <HStack>
                      <Image boxSize="32px" src={getCroppedImageUrl(genre.image_background)} alt={genre.name} borderRadius='5px'/>
                      <Button variant='ghost' flex='revert' onClick={() => onSelectGenre(genre)}>{genre.name}</Button>
                  </HStack>
              </ListItem>
          ))}
      </ListRoot>
  );
}

export default GenreList
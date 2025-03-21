import useGere from '@/hooks/useGenre'
import React from 'react'

const GenreList = () => {

    const { data } = useGere();

  return (
    <ul>
        {data.map(genre => <li key={genre.id}>{genre.name}</li>)}
    </ul>
  )
}

export default GenreList
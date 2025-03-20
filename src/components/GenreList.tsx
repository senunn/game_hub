import useGere from '@/hooks/useGenre'
import React from 'react'

const GenreList = () => {

    const { genres } = useGere();

  return (
    <ul>
        {genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
    </ul>
  )
}

export default GenreList
import React from 'react'
import useGenres from '../hooks/useGenres'

const GenreSelection = () => {
  const {data} = useGenres();

  console.log(data)
  
  return (
    <ul>
      {data?.map(genre => <li key={genre.id}>{genre.name}</li>)}
    </ul>
  )
}

export default GenreSelection
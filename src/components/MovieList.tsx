import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client';
import { flattenTokens } from '@chakra-ui/react';
import { tmdbConfigOptions } from './config';
import useMovies from '../hooks/useMovies';

const MovieList = () => {
  const {movies, error, isLoading} = useMovies();
  
  return (
    <ul>
      {isLoading ? movies.map(movie => <li key={movie.id}>{movie.title}</li>) : <p>Loading...</p>}
    </ul>
  )
}

export default MovieList
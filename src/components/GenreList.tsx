import React from "react";
import useMovieDetails from "../hooks/useMovieDetails";
import Movie from "../entities/Movie";

interface Props {
  movie: Movie;
}

const GenreList = ({ movie }: Props) => {
  const { genres, error } = useMovieDetails(movie?.id);

  return (
    <ul>
      {genres.map((genre) => (
        <li>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;

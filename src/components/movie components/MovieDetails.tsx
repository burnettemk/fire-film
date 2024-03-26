import useMovieDetails from "../../hooks/useMovieDetails";

const MovieDetails = () => {
  // Coco
  const movie = useMovieDetails(354912);

  return (
    <div>
      Coco Genres:
      <ul>
        {movie.genres.map((genre) => (
          <li>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieDetails;

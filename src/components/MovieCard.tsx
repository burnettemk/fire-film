import { Box, Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Movie } from "../hooks/useMovies";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import apiConfig from "../configuration/apiConfig";

interface Props {
  movie: Movie;
}
const MovieCard = ({ movie }: Props) => {
  return (
    <Card overflow="hidden" bg="transparent">
      <Image
        // width={{ sm: "80%" }}
        // mx="auto"
        borderRadius={10}
        src={getCroppedImageUrl(apiConfig.images.base_url + movie.poster_path)}
      />
      <CardBody>
        <Box
          marginTop={{
            base: "-50px",
            md: "-45px",
            lg: "-40px",
            "2xl": "-40px",
          }}
          paddingBottom={2}
        >
          <CriticScore score={movie.vote_average} />
        </Box>
        <Heading
          fontSize={{
            // xs: "2xl",
            // sm: "4xl",
            base: "3xl",
            md: "2xl",
            lg: "lg",
            // xl: "2xl",
            // "2xl": "lg",
          }}
          textAlign="center"
        >
          {movie.title}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default MovieCard;

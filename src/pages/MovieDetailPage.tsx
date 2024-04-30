import React from "react";
import { useParams } from "react-router-dom";
import useMovieDetails from "../hooks/useMovieDetails";
import { Grid, GridItem, Show, Text, list } from "@chakra-ui/react";

const MovieDetailPage = () => {
  const { id } = useParams();
  const { data: details, error, isLoading } = useMovieDetails(parseInt(id!));

  return (
    <Grid
      templateAreas={{
        base: `"backdrop" "main" "aside" "footer"`,
        lg: `"backdrop backdrop" "main aside" "footer footer"`,
      }}
    >
      <GridItem area="backdrop" bg="red">
        backdrop
        <Text bg="red.600">{details?.backdrop_path}</Text>
        <Text bg="red.700">{details?.tagline}</Text>
      </GridItem>
      <GridItem area="main" bg="coral">
        main
        <Text>{details?.title}</Text>
        <Text>{details?.original_title}</Text>
        <Text>{details?.overview}</Text>
        <br />
        <ul>
          GENRES
          {details?.genres.map((g) => (
            <li key={g.id}>{g.name}</li>
          ))}
        </ul>
        <br />
        <ul>
          CAST
          {details?.credits.cast.map((person) => (
            <li key={person.id}>{person.name}</li>
          ))}
        </ul>
        <br />
        <ul>
          CREW
          {details?.credits.crew.map((person) => (
            <li key={person.id}>{person.name + " : " + person.job}</li>
          ))}
        </ul>
        <br />
        <ul>
          VIDEOS
          {details?.videos.results.map((video) => (
            <li key={video.id}>{video.name}</li>
          ))}
        </ul>
      </GridItem>
      <GridItem area="aside" bg="teal">
        aside
        <p>{"Release Date: " + details?.release_date}</p>
        <p>{"Status: " + details?.status}</p>
        <p>{"Runtime: " + details?.runtime}</p>
        <p>{details?.homepage}</p>
      </GridItem>
      <GridItem area="footer" bg="orange">
        footer
      </GridItem>
    </Grid>
  );
};

export default MovieDetailPage;

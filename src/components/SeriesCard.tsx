import React from "react";
import { Series } from "../hooks/useTV";
import { Box, Card, CardBody, Heading, Image } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import apiConfig from "../configuration/apiConfig";

interface Props {
  series: Series;
}

const SeriesCard = ({ series }: Props) => {
  return (
    <Card overflow="hidden" bg="transparent">
      <Image
        // width={{ sm: "80%" }}
        // mx="auto"
        borderRadius={10}
        src={getCroppedImageUrl(apiConfig.images.base_url + series.poster_path)}
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
          <CriticScore score={series.vote_average} />
        </Box>
        <Heading
          fontSize={{
            // xs: "2xl",
            // sm: "4xl",
            base: "3xl",
            md: "2xl",
            lg: "md",
            xl: "lg",
          }}
          textAlign="center"
        >
          {series.name}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default SeriesCard;

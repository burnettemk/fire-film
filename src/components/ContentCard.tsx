import { Box, Card, CardBody, Heading, Image } from "@chakra-ui/react";
import imageNotSupported from "../assets/ImageNotSupported.png";
import apiConfig from "../configuration/apiConfig";
import Content from "../entities/Content";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import { Link } from "react-router-dom";
import { useIsMoviesSelectedStore } from "../store";

interface Props {
  content: Content;
}

const ContentCard = ({ content }: Props) => {
  const moviesSelected = useIsMoviesSelectedStore().isSelected;

  const pathString = moviesSelected ? "films" : "series";

  return (
    <Link to={`/${pathString}/` + content.id}>
      <Card overflow="hidden" bg="transparent">
        <Image
          borderRadius={10}
          src={
            content.poster_path
              ? getCroppedImageUrl(
                  apiConfig.images.base_url + content.poster_path
                )
              : imageNotSupported
          }
        />
        <CardBody>
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
            {content.title ? content.title : content.name}
          </Heading>
        </CardBody>
      </Card>
    </Link>
  );
};

export default ContentCard;

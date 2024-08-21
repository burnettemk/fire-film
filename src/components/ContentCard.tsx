import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import imageNotSupported from "../assets/ImageNotSupported.png";
import apiConfig from "../configuration/apiConfig";
import Content from "../entities/Content";
import getCroppedImageUrl from "../services/image-url";
import { useIsMoviesSelectedStore } from "../store";
import MarkPageButton from "./MarkPageButton";
import { MarkedContent } from "./MarkedPageSelector";

interface Props {
  content: Content;
}

const ContentCard = ({ content }: Props) => {
  const moviesSelected = useIsMoviesSelectedStore().isSelected;

  const pathString = moviesSelected ? "films" : "series";

  const handleClick = () => {
    let newObject: MarkedContent = {
      contentId: content.id,
      contentPosterPath: content.poster_path,
      contentType: pathString,
    };

    // Check if window.addObjectToLocalStorage is defined before invoking it
    if (window.addObjectToLocalStorage) {
      window.addObjectToLocalStorage(newObject);
    }
  };

  return (
    <Card overflow="hidden" bg="transparent">
      <MarkPageButton handleClick={handleClick} />
      <Link to={`/${pathString}/` + content.id}>
        <Image
          borderRadius={10}
          src={
            content.poster_path
              ? getCroppedImageUrl(
                  apiConfig.images.secure_base_url + content.poster_path
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
      </Link>
    </Card>
  );
};

export default ContentCard;

import { Box, Card, CardBody, Heading, Image } from "@chakra-ui/react";
import imageNotSupported from "../assets/ImageNotSupported.png";
import apiConfig from "../configuration/apiConfig";
import Content from "../entities/Content";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";

interface Props {
  content: Content;
}

const ContentCard = ({ content }: Props) => {
  return (
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
  );
};

export default ContentCard;

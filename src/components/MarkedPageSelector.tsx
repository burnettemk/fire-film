import { Image } from "@chakra-ui/react";
import imageNotSupported from "../assets/ImageNotSupported.png";
import apiConfig from "../configuration/apiConfig";
import { useGetUserPrefs } from "../hooks/useUserPrefs";
import getCroppedImageUrl from "../services/image-url";
import { useMarkedContentStore } from "../store";

const MarkedPageSelector = () => {
  if (useGetUserPrefs() == null) return <div></div>;

  const markedItem = JSON.parse(useGetUserPrefs()!);
  const markedContentStore = useMarkedContentStore();

  if (markedContentStore.contentPosterPath == null) {
    markedContentStore.setContentID(markedItem.contentID);
    markedContentStore.setContentPath(markedItem.contentPosterPath);
    markedContentStore.setContentPath(markedItem.contentType);
  }

  return (
    <div
      style={{
        background: "black",
        width: "80%",
        position: "fixed",
        bottom: "10px",
        left: "10%",
        borderWidth: "medium",
        borderRadius: "10px",
        borderColor: "orangered",
      }}
    >
      {
        <Image
          width={"75px"}
          src={
            markedItem.contentPosterPath
              ? getCroppedImageUrl(
                  apiConfig.images.secure_base_url +
                    markedItem.contentPosterPath
                )
              : imageNotSupported
          }
        />
      }
    </div>
  );
};

export default MarkedPageSelector;

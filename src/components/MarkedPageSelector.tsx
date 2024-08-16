import { Image } from "@chakra-ui/react";
import imageNotSupported from "../assets/ImageNotSupported.png";
import apiConfig from "../configuration/apiConfig";
import { useGetUserPrefs } from "../hooks/useUserPrefs";
import getCroppedImageUrl from "../services/image-url";
import { useEffect, useState } from "react";

interface MarkedContent {
  contentId: number;
  contentPosterPath: string;
  contentType: string;
}

const MarkedPageSelector = () => {
  // const [markedData, setMarkedData] = useState({});
  // State to hold the object retrieved from localStorage, which can be of type User or null
  const [storedObject, setStoredObject] = useState<MarkedContent | null>(null);

  // if (useGetUserPrefs() == null) return <div id="no-content"></div>;

  // Function to continuously check for object in localStorage
  useEffect(() => {
    const interval = setInterval(() => {
      const stored = localStorage.getItem("marked content");
      if (stored) {
        setStoredObject(JSON.parse(stored) as MarkedContent); // Update state with the value in localStorage
        console.log(storedObject);
      } else {
        setStoredObject(null); // Set state to null if object is not in localStorage
      }
    }, 250); // Check every quater of a second

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  // I have added a state variable that can be used to trigger a re-render and we will
  //  a boolean expression determine what to return based on the current state.
  return (
    <div
      id="marked-content-selector"
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
      {/* I can see the changes to the marked content here because we have direct access to the
      item in local storage and can see all of the changes in the item */}
      {storedObject ? (
        <Image
          width={"75px"}
          src={
            storedObject.contentPosterPath
              ? getCroppedImageUrl(
                  apiConfig.images.secure_base_url +
                    storedObject.contentPosterPath
                )
              : imageNotSupported
          }
        />
      ) : (
        <div>Nothing to see here...</div>
      )}
    </div>
  );
};

export default MarkedPageSelector;

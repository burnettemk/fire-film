import { Box, HStack, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MdCancel } from "react-icons/md";
import imageNotSupported from "../assets/ImageNotSupported.png";
import apiConfig from "../configuration/apiConfig";
import getCroppedImageUrl from "../services/image-url";
import { Link } from "react-router-dom";
import ContentRemoveButton from "./ContentRemoveButton";

export interface MarkedContent {
  contentId: number;
  contentPosterPath: string;
  contentType: string;
}

// Extend the Window interface to include the addObjectToLocalStorage method
declare global {
  interface Window {
    addObjectToLocalStorage?: (newObject: MarkedContent) => void;
  }
}

const MarkedPageSelector = () => {
  // State to hold the array of users retrieved from localStorage
  const [storedArray, setStoredArray] = useState<MarkedContent[]>([]);

  // Function to save object to localStorage array
  const addObjectToLocalStorage = (contentObject: MarkedContent) => {
    setStoredArray((prevArray) => {
      const updatedArray = [...prevArray, contentObject];
      localStorage.setItem("marked content", JSON.stringify(updatedArray));
      return updatedArray;
    });
  };

  // Function to remove object by index from localStorage array
  const removeObjectFromLocalStorage = (index: number) => {
    const updatedArray = storedArray.filter((_, i) => i !== index); // Remove the object at the specified index
    localStorage.setItem("marked content", JSON.stringify(updatedArray));
    setStoredArray(updatedArray); // Update the state with the new array
  };

  // Function to continuously check for object in localStorage
  useEffect(() => {
    // Load from localStorage on component mount
    const stored = localStorage.getItem("marked content");
    if (stored) {
      setStoredArray(JSON.parse(stored) as MarkedContent[]);
    }

    // Expose the add function to the external window
    window.addObjectToLocalStorage = (newObject: MarkedContent) => {
      addObjectToLocalStorage(newObject);
    };

    // Clean up the function from the global window object
    return () => {
      delete window.addObjectToLocalStorage;
    };
  }, []);

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
      {storedArray.length > 0 ? (
        <Box>
          <HStack>
            {storedArray.map((content, index) => (
              <Box key={content.contentId} position="relative">
                <ContentRemoveButton
                  onClick={() => removeObjectFromLocalStorage(index)}
                />
                <Link to={`/${content.contentType}/` + content.contentId}>
                  <Image
                    width={"75px"}
                    src={
                      content.contentPosterPath
                        ? getCroppedImageUrl(
                            apiConfig.images.secure_base_url +
                              content.contentPosterPath
                          )
                        : imageNotSupported
                    }
                  />
                </Link>
              </Box>
            ))}
          </HStack>
        </Box>
      ) : (
        <p>No objects stored.</p>
      )}
    </div>
  );
};

export default MarkedPageSelector;

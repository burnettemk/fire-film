import { Box, Link, Tooltip } from "@chakra-ui/react";
import React from "react";
import { RiSurveyLine } from "react-icons/ri";

const SurveyLink = () => {
  return (
    <Link href="https://forms.gle/H5D929vUJfxsBcTw5" isExternal>
      <Tooltip label="Take Survey" aria-label="a tooltip">
        <Box
          borderRadius="full"
          bg="blue.800"
          w="fit-content"
          h="fit-content"
          p={2}
          mr={2}
        >
          <RiSurveyLine size="25px" />
        </Box>
      </Tooltip>
    </Link>
  );
};

export default SurveyLink;

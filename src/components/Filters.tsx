import { Box } from "@chakra-ui/react";
import GenreSelection from "./GenreSelection";

const Filters = () => {
  return (
    <>
      <Box width="fit-content" mx="auto" mt="10px">
        <GenreSelection />
      </Box>
    </>
  );
};

export default Filters;

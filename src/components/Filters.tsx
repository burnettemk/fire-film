import { Box, Flex, HStack, SimpleGrid, Spacer } from "@chakra-ui/react";
import AdvancedFilters from "./filters/AdvancedFilters";
import GenreSelection from "./filters/GenreSelection";
import ListSelection from "./filters/ListSelection";
import RatingSelection from "./filters/RatingSelection";

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

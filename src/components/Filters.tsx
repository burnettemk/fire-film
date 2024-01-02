import { Box, Flex, HStack, SimpleGrid, Spacer } from "@chakra-ui/react";
import AdvancedFilters from "./filters/AdvancedFilters";
import GenreSelection from "./filters/GenreSelection";
import ListSelection from "./filters/ListSelection";
import RatingSelection from "./filters/RatingSelection";

const Filters = () => {
  return (
    <>
      <Box
        bg="gray.700"
        px="15px"
        py="10px"
        width="fit-content"
        mx="auto"
        borderRadius={13}
      >
        {/* <SimpleGrid>

        </SimpleGrid> */}
        {/* <HStack justifyContent="space-around" spacing={3} px={5}>
          <GenreSelection />
          <RatingSelection />
          <ListSelection />
        </HStack> */}
        <Flex mt="10px">
          <Spacer />
          <AdvancedFilters />
          <Spacer />
        </Flex>
      </Box>
    </>
  );
};

export default Filters;

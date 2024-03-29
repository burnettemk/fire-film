import { useState } from "react";
import { Box, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import {
  PiArrowBendDownRightBold,
  PiArrowBendUpLeftBold,
} from "react-icons/pi";
import { useIsMoviesSelectedStore } from "../store";

const MovieTVToggle = () => {
  const isMoviesSelected = useIsMoviesSelectedStore((s) => s.isSelected);
  const setIsMoviesSelected = useIsMoviesSelectedStore(
    (s) => s.setIsMoviesSelected
  );

  return (
    <Box ml={2}>
      <VStack
        color="gray.600"
        onClick={() => {
          setIsMoviesSelected(!isMoviesSelected);
          console.log(isMoviesSelected);
        }}
      >
        <HStack>
          <Text
            color={isMoviesSelected ? "gray.400" : ""}
            transition="color 0.25s ease-out"
            userSelect="none"
          >
            Movies
          </Text>
          <Icon as={PiArrowBendUpLeftBold} />
        </HStack>
        <HStack marginLeft={7} marginTop={-3}>
          <Icon as={PiArrowBendDownRightBold} />
          <Text
            color={isMoviesSelected ? "" : "gray.400"}
            transition="color 0.25s ease-out"
            userSelect="none"
            pl={3}
          >
            TV
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default MovieTVToggle;

import {
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import useMovieQueryStore from "../store";

const PageSelector = () => {
  const setPageNumber = useMovieQueryStore((s) => s.setPageNumber);
  const currPageNumber = useMovieQueryStore((s) => s.movieQuery.page);

  return (
    <Flex pb="15px">
      <Spacer />
      {currPageNumber! > 1 ? (
        <Button
          bg="none"
          height="25px"
          onClick={() => setPageNumber(currPageNumber! - 1)}
        >
          <Icon as={IoIosArrowBack} />
        </Button>
      ) : null}
      <Text px="25px">{currPageNumber}</Text>
      <Button
        bg="none"
        height="25px"
        onClick={() => setPageNumber(currPageNumber! + 1)}
      >
        <Icon as={IoIosArrowForward} />
      </Button>
      <Spacer />
    </Flex>
  );
};

export default PageSelector;

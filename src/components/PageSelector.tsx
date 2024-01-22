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

const PageSelector = () => {
  return (
    <Flex pb="15px">
      <Spacer />
      <Button bg="none" height="25px" onClick={() => console.log("prev page")}>
        <Icon as={IoIosArrowBack} />
      </Button>
      <Text px="25px">1</Text>
      <Button bg="none" height="25px" onClick={() => console.log("next page")}>
        <Icon as={IoIosArrowForward} />
      </Button>
      <Spacer />
    </Flex>
  );
};

export default PageSelector;

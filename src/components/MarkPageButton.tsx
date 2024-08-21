import { Button, Icon } from "@chakra-ui/react";
import React from "react";
import { FaPlus } from "react-icons/fa6";
import { HiPlus } from "react-icons/hi";

interface Props {
  handleClick: () => void;
}

const MarkPageButton = ({ handleClick }: Props) => {
  return (
    <Button
      onClick={handleClick}
      position="absolute"
      right="0px"
      bg="#39FF14"
      color="black"
      borderRadius="full"
      boxShadow="0 0 10px #39FF14, 0 0 20px #39FF14" // Glowing neon effect
      _hover={{
        bg: "#ff4500",
        boxShadow: "0 0 10px #ff4500, 0 0 20px #ff4500",
      }} // Neon orangered on hover
      _active={{
        bg: "#8B0000",
        boxShadow: "0 0 10px #8B0000, 0 0 20px #8B0000",
      }} // Neon black on active
      size="sm"
      p={0}
      w="25px"
      h="25px"
    >
      <Icon as={FaPlus} boxSize="4" />
    </Button>
  );
};

export default MarkPageButton;

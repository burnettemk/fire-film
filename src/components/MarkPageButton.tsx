import { Button, Icon } from "@chakra-ui/react";
import React from "react";
import { FaPlus } from "react-icons/fa6";
import { HiPlus } from "react-icons/hi2";
import { TbListDetails } from "react-icons/tb";

interface Props {
  handleClick: () => void;
}

const MarkPageButton = ({ handleClick: onclick }: Props) => {
  return (
    <div
      style={{
        position: "absolute",
        right: "0px",
        background: "black",
        borderRadius: "100%",
        padding: "2px 5px",
        borderColor: "#87f6ff",
        borderWidth: "thin",
      }}
    >
      {/* <Button px={0} w="50%" h="fit-content" bg="black" onClick={onclick}>
        <Icon as={FaPlus} />
      </Button> */}
      <button onClick={onclick}>
        <Icon as={TbListDetails} />
      </button>
    </div>
  );
};

export default MarkPageButton;

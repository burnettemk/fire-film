import React, { Children, useRef, useState } from "react";
import Selector from "./Selector";
import { HStack } from "@chakra-ui/react";

interface Props {
  labels: string[];
  onChange: (value: string) => void | undefined;
}

const SelectionList = ({ labels, onChange }: Props) => {
  const selectionRef = useRef([""]);

  const handleChange = (newSelection: string, state: boolean) => {
    if (state) {
      selectionRef.current = selectionRef.current
        .concat(newSelection)
        .filter((label) => label != "");
      onChange(selectionRef.current.toString().replaceAll(",", "|"));
    } else {
      selectionRef.current = selectionRef.current.filter(
        (label) => label != newSelection
      );
      onChange(selectionRef.current.toString().replaceAll(",", "|"));
    }
    // console.log(selectionRef.current.toString().replaceAll(",", "|"));
  };

  return (
    <>
      <HStack>
        {labels.map((label) => (
          <Selector label={label} onSelectionClick={handleChange} key={label} />
        ))}
      </HStack>
    </>
  );
};

export default SelectionList;

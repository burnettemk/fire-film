import { Button } from "@chakra-ui/react";
import React, { useState } from "react";

interface Props {
  label: string;
  onSelectionClick: (value: string, state: boolean) => void;
}

const Selector = ({ label, onSelectionClick }: Props) => {
  const [buttonState, setButtonState] = useState(false);

  return (
    <div
      onClick={() => {
        setButtonState(!buttonState);
        onSelectionClick(label, !buttonState);
      }}
    >
      {buttonState ? (
        <Button size="xs" variant="solid">
          {label}
        </Button>
      ) : (
        <Button size="xs" variant="outline">
          {label}
        </Button>
      )}
    </div>
  );
};

export default Selector;

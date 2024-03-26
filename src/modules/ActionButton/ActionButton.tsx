import { Button, useStyleConfig } from "@chakra-ui/react";
import React from "react";
import { TiArrowUpThick } from "react-icons/ti";
import { FaMasksTheater } from "react-icons/fa6";
import BaseActionButton from "./BaseActionButton";

interface Props {
  size: string;
  variant: string;
  positioning?: {
    left?: string;
    top?: string;
    right?: string;
    bottom?: string;
  };
  children: React.ReactNode;
}

// With a class definition I can define many different kinds of action buttons
const baseButton = new BaseActionButton(
  "scroll-to-top",
  <FaMasksTheater />,
  "bottom-right",
  `'fade-in''fade-out'`,
  "md"
);

const ActionButton = ({ children, size, variant, positioning }: Props) => {
  // I can create all of the action buttons I need as separate files,
  //  but I need to make sure that the theme is applied to all those buttons
  const styles = useStyleConfig("ActionButton", { size, variant });
  // we can now save user prefs to local storage for when we allow for
  //  the switch from positioning from the sides to positioning from the bottom

  // we should make some basic objects to pass to the action button component or
  //  whichever component does the rendering
  //      OR
  // we could make create a class for the action button and add premade positioning
  //  objects to it

  return (
    <Button
      __css={styles}
      left={positioning?.left ? positioning.left : undefined}
      right={positioning?.left ? undefined : positioning?.right}
      top={positioning?.top ? positioning.top : undefined}
      bottom={positioning?.top ? undefined : positioning?.bottom}
      onClick={() => {
        const element = document.getElementById("nav-bar");
        element?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      {children}
    </Button>
  );
};

export default ActionButton;

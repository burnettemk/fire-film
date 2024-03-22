import { Button, useStyleConfig } from "@chakra-ui/react";
import React, { Children } from "react";

interface Props {
  size: string;
  variant: string;
  right: string;
  bottom: string;
  children: React.ReactNode;
}

const ActionButton = ({ children, size, variant, right, bottom }: Props) => {
  const styles = useStyleConfig("ActionButton", { size, variant });

  return (
    <Button
      __css={styles}
      right={right}
      bottom={bottom}
      onClick={() => {
        const element = document.getElementById("fire-film");
        element?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      {children}
    </Button>
  );
};

export default ActionButton;

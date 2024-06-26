import { Button, useStyleConfig } from "@chakra-ui/react";
import React from "react";

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
  relativePosition?: string;
  scrollToID?: string;
}

const ActionButton = ({
  children,
  size,
  variant,
  positioning,
  scrollToID,
}: Props) => {
  const styles = useStyleConfig("ActionButton", { size, variant });

  return (
    <Button
      __css={styles}
      left={positioning?.left ? positioning.left : undefined}
      right={positioning?.left ? undefined : positioning?.right}
      top={positioning?.top ? positioning.top : undefined}
      bottom={positioning?.top ? undefined : positioning?.bottom}
      onClick={() => {
        const element = document.getElementById(
          scrollToID ? scrollToID : "root"
        );
        element?.scrollIntoView({ behavior: "smooth" });
      }}
      children={children}
    ></Button>
  );
};

export default ActionButton;

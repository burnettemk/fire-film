import { Button, useStyleConfig } from "@chakra-ui/react";
import React from "react";

interface Props {
  size?: string;
  variant?: string;
  positioning?: {
    left?: string;
    top?: string;
    right?: string;
    bottom?: string;
  };
  children: React.ReactNode;
  relativePosition?: string;
  handleClick: () => void;
  ref?: React.LegacyRef<HTMLButtonElement>;
}

const DrawerButton = ({
  children,
  size,
  variant,
  positioning,
  handleClick,
}: Props) => {
  const styles = useStyleConfig("BaseButton", { size, variant });

  return (
    <Button
      __css={styles}
      left={positioning?.left ? positioning.left : undefined}
      right={positioning?.left ? undefined : positioning?.right}
      top={positioning?.top ? positioning.top : undefined}
      bottom={positioning?.top ? undefined : positioning?.bottom}
      onClick={() => handleClick()}
      children={children}
    ></Button>
  );
};

export default DrawerButton;

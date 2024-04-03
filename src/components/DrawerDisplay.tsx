import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { DrawerContext } from "../contexts/DrawerContext";

interface Props {
  heading: string;
  buttonHeading?: string;
  onReset: (value: string) => void;
  children: React.ReactNode;
  buttonIcon?: React.JSX.Element;
}

const DrawerDisplay = ({
  heading,
  onReset,
  children,
  buttonHeading,
}: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);

  const s = "left";

  return (
    <>
      <Button ref={btnRef} onClick={onOpen}>
        {buttonHeading}
      </Button>
      <Drawer
        isOpen={isOpen}
        placement={s}
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{heading}</DrawerHeader>

          <DrawerBody>
            <DrawerContext.Provider value={onClose}>
              {children}
            </DrawerContext.Provider>
          </DrawerBody>

          <DrawerFooter>
            <Button
              colorScheme="blue"
              onClick={() => {
                onReset("");
                onClose();
              }}
            >
              Reset
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerDisplay;

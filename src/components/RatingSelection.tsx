import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useMovieQueryStore } from "../store";
import RatingRadio from "./RatingRadio";
import RatingList from "./RatingList";
import SelectionList from "./SelectionList";

const RatingSelection = () => {
  const setRegion = useMovieQueryStore((s) => s.setCertificationCountry);
  const setRating = useMovieQueryStore((s) => s.setCertification);
  setRegion("US");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);

  return (
    <>
      <Button ref={btnRef} onClick={onOpen}>
        Rating
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Select Age Rating</DrawerHeader>

          <DrawerBody>
            <RatingList />
          </DrawerBody>

          <DrawerFooter>
            <Button colorScheme="blue" onClick={() => setRating("")}>
              Reset
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default RatingSelection;

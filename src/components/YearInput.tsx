import {
  Box,
  Button,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import { useContext, useRef } from "react";

import { DrawerContext } from "../contexts/DrawerContext";

interface Props {
  setYear: (value: number) => void;
}

const YearInput = ({ setYear }: Props) => {
  const closeDrawer = useContext(DrawerContext);
  const yearRef = useRef<number>(0);

  const currentYear = new Date().getFullYear();
  return (
    <>
      <NumberInput
        onChange={(valueAsString) =>
          (yearRef.current = parseInt(valueAsString))
        }
        defaultValue={1990}
        min={1885}
        max={currentYear}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Box display="grid">
        <Button
          variant="solid"
          colorScheme="blue"
          justifySelf="center"
          mt={4}
          onClick={() => {
            setYear(yearRef.current);
            closeDrawer();
          }}
        >
          Done
        </Button>
      </Box>
    </>
  );
};

export default YearInput;

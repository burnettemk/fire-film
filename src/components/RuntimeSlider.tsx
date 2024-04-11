import {
  Box,
  Button,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
} from "@chakra-ui/react";
import { useContext, useRef, useState } from "react";
import { DrawerContext } from "../contexts/DrawerContext";

interface Props {
  setRuntime: (range: number[]) => void;
}

const RuntimeSlider = ({ setRuntime }: Props) => {
  const closeDrawer = useContext(DrawerContext);

  const valueRef = useRef([0, 400]);
  const [values, setValues] = useState<number[]>([0, 400]);
  const [changesExist, setChangesExist] = useState(false);
  return (
    <>
      <RangeSlider
        aria-label={["min", "max"]}
        defaultValue={[0, 400]}
        min={0}
        max={400}
        step={10}
        onChange={(value) => {
          setValues(value);
        }}
        onChangeEnd={(value) => {
          valueRef.current = value;
          console.log(valueRef.current);
        }}
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0}>
          {
            <Box position="relative" top="15px">
              {values![0]}
            </Box>
          }
        </RangeSliderThumb>
        <RangeSliderThumb index={1}>
          {
            <Box position="relative" top="15px">
              {values![1]}
            </Box>
          }
        </RangeSliderThumb>
      </RangeSlider>
      <Box display="grid">
        <Button
          variant="solid"
          colorScheme="blue"
          justifySelf="center"
          mt={4}
          onClick={() => {
            setRuntime(valueRef.current);
            closeDrawer();
          }}
        >
          Done
        </Button>
      </Box>
    </>
  );
};

export default RuntimeSlider;

import { Box, HStack } from "@chakra-ui/react";
import { useContext, useRef, useState } from "react";
import ApplyButton from "./ApplyButton";
import { DrawerContext } from "../../components/DrawerContext";
import Selector from "./Selector";

interface Props {
  labels: string[];
  onChange: (value: string) => void | undefined;
}

const SelectionList = ({ labels, onChange }: Props) => {
  const selectionRef = useRef([""]);
  const [changesExist, setChangesExist] = useState(false);

  const closeDrawer = useContext(DrawerContext);

  const handleChange = (newSelection: string, state: boolean) => {
    if (state) {
      selectionRef.current = selectionRef.current
        .concat(newSelection)
        .filter((label) => label != "");

      setChangesExist(true);
    } else {
      selectionRef.current = selectionRef.current.filter(
        (label) => label != newSelection
      );

      if (selectionRef.current.length === 0 && !changesExist)
        setChangesExist(true);
      else if (selectionRef.current.length === 0) setChangesExist(false);
    }
  };

  const applyChanges = () => {
    onChange(selectionRef.current.toString().replaceAll(",", "|"));
    setChangesExist(false);
    closeDrawer();
  };

  return (
    <Box>
      <HStack>
        {labels.map((label) => (
          <Selector label={label} onSelectionClick={handleChange} key={label} />
        ))}
      </HStack>
      <Box width="fit-content" mx="auto" mt={4}>
        <ApplyButton changesExist={changesExist} apply={applyChanges} />
      </Box>
    </Box>
  );
};

export default SelectionList;

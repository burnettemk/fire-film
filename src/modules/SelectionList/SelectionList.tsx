import { Box, HStack, NumberInputFieldProps, Stack } from "@chakra-ui/react";
import { useContext, useRef, useState } from "react";
import ApplyButton from "./ApplyButton";
import { DrawerContext } from "../../contexts/DrawerContext";
import Selector from "./Selector";

interface LabelObject {
  label: string;
  id: number;
}

interface Props {
  labels: string[];
  labelIds?: number[];
  needsID?: boolean;
  onChange: (value: string) => void | undefined;
  selectionType: string;
}

const SelectionList = ({
  labels,
  labelIds,
  onChange,
  selectionType,
  needsID,
}: Props) => {
  const selectionRef = useRef([""]);
  const [changesExist, setChangesExist] = useState(false);

  const labelObjects: LabelObject[] = [];

  // If I need to pass label ids, make objects for them
  if (labelIds) {
    for (let i = 0; i < Math.min(labels.length, labelIds.length); i++) {
      labelObjects.push({ label: labels[i], id: labelIds[i] });
    }
  }

  // Change separating character depending on whether we need AND selection or OR selection
  let seperatorChar = "";

  if (selectionType === "and") seperatorChar = ",";
  else seperatorChar = "|";

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
    // If I need to pass the id in the query, use the objects for labels to match name and ids
    if (needsID) {
      onChange(
        selectionRef.current
          .map(
            (selection) => labelObjects.find((lo) => lo.label === selection)?.id
          )
          .toString()
          .replace(",", seperatorChar)
      );
    } else {
      onChange(selectionRef.current.toString().replaceAll(",", seperatorChar));
    }

    setChangesExist(false);
    closeDrawer();
  };

  return (
    <Box>
      <Stack direction={"row"} display={"inline-block"}>
        {labels.map((label) => (
          <Selector label={label} onSelectionClick={handleChange} key={label} />
        ))}
      </Stack>
      <Box width="fit-content" mx="auto" mt={4}>
        <ApplyButton changesExist={changesExist} apply={applyChanges} />
      </Box>
    </Box>
  );
};

export default SelectionList;

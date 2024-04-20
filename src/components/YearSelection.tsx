import { Select } from "@chakra-ui/react";
import { useMovieQueryStore } from "../store";
import DrawerDisplay from "./DrawerDisplay";
import YearInput from "./YearInput";

const YearSelection = () => {
  const setYear = useMovieQueryStore((s) => s.setYear);

  const handleReset = (value: string) => setYear(parseInt(value));

  return (
    <DrawerDisplay
      heading="Select Year of Release"
      onReset={handleReset}
      buttonHeading="Year"
      children={<YearInput setYear={setYear} />}
    />
  );
};

export default YearSelection;

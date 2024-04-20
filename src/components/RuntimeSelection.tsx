import { useMovieQueryStore } from "../store";
import DrawerDisplay from "./DrawerDisplay";
import RuntimeSlider from "./RuntimeSlider";

const RuntimeSelection = () => {
  const setRuntimeRange = useMovieQueryStore((s) => s.setRuntimeRange);

  return (
    <DrawerDisplay
      heading="Select Runtime Range"
      onReset={() => setRuntimeRange([0, 400])}
      buttonHeading="Runtime"
      children={<RuntimeSlider setRuntime={setRuntimeRange} />}
    />
  );
};

export default RuntimeSelection;

import { useMovieQueryStore } from "../store";
import DrawerDisplay from "./DrawerDisplay";
import RatingList from "./RatingList";

const RatingSelection = () => {
  const setRegion = useMovieQueryStore((s) => s.setCertificationCountry);
  const setRating = useMovieQueryStore((s) => s.setCertification);
  setRegion("US");

  return (
    <DrawerDisplay
      heading="Select Age Rating"
      onReset={setRating}
      children={<RatingList />}
      buttonHeading="Rating"
    />
  );
};

export default RatingSelection;

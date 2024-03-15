import movieCertifications from "../data/configuration";
import { useMovieQueryStore } from "../store";
import SelectionList from "./SelectionList";

const RatingList = () => {
  const countryCode = useMovieQueryStore(
    (s) => s.movieQuery.certification_country
  );

  const setRating = useMovieQueryStore((s) => s.setCertification);

  const countryCertifications = movieCertifications.certifications.US;

  const certificationList = countryCertifications.forEach((certification) => {
    // console.log(certification.certification);
  });

  return (
    <SelectionList
      labels={["G", "PG", "PG-13", "R"]}
      onChange={setRating}
    ></SelectionList>
  );
};

export default RatingList;

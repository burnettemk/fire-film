import useSearchTV from "../hooks/useSearchTV";
import TVGridDisplay from "./TVGridDisplay";

const TVSearchResultGrid = () => {
  const responseData = useSearchTV();

  return <TVGridDisplay response={responseData} />;
};

export default TVSearchResultGrid;

import useSearchTV from "../hooks/useSearchTV";
import ContentGridDisplay from "./ContentGridDisplay";

const TVSearchResultGrid = () => {
  const responseData = useSearchTV();

  return <ContentGridDisplay response={responseData} />;
};

export default TVSearchResultGrid;

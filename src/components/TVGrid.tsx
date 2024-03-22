import useTV from "../hooks/useTV";
import ContentGridDisplay from "./ContentGridDisplay";

const TVGrid = () => {
  const responseData = useTV();

  return <ContentGridDisplay response={responseData} />;
};

export default TVGrid;

import useTV from "../hooks/useTV";
import TVGridDisplay from "./TVGridDisplay";

const TVGrid = () => {
  const responseData = useTV();

  return <TVGridDisplay response={responseData} />;
};

export default TVGrid;

import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = "";
  if (score >= 7) color = "green";
  else if (score > 5) color = "yellow";
  else if (score == 0) color = "gray";
  else color = "red";

  return (
    <Badge
      fontSize={{
        base: "3xl",
        md: "2xl",
        lg: "lg",
        xl: "lg",
      }}
      paddingX={2}
      borderRadius={4}
      colorScheme={color}
      bg="black"
      borderColor={color}
      borderWidth={2}
    >
      {parseFloat(score.toFixed(1)) > 0 ? parseFloat(score.toFixed(1)) : "NR"}
    </Badge>
  );
};

export default CriticScore;

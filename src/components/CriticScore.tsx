import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = "";
  if (score >= 7) color = "green";
  else if (score > 5) color = "yellow";
  else color = "red";

  return (
    <Badge
      fontSize={{
        base: "3xl",
        md: "2xl",
        lg: "xl",
        xl: "xl",
        "2xl": "lg",
      }}
      paddingX={2}
      borderRadius={4}
      colorScheme={color}
      bg="black"
      borderColor={color}
      borderWidth={2}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;

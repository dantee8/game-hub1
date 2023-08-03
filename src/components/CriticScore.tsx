import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "";

  return (
    <Badge
      fontSize={"1.4rem"}
      paddingX={2}
      borderRadius={"0.4rem"}
      colorScheme={color}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;

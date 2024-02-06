import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const CardSkeleton = () => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Skeleton height="320px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default CardSkeleton;

import React from "react";
import Skeleton from "react-loading-skeleton";

const SkeletonCard = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((item) => (
      <Skeleton height={200} width={157} duration={2} className="mr-[0.5rem]" />
    ));
};

export default SkeletonCard;

import React from "react";
import DateDiff from "date-diff";

const computeDiff = (expiresAt, now) => {
  return new DateDiff(expiresAt, now).days();
};

export default props => {
  const { expiresAt, now } = props;
  const diff = Math.floor(computeDiff(expiresAt, now));
  const days = diff === 1 ? `day` : "days";
  return (
    <strong>
      {diff} {days} left
    </strong>
  );
};

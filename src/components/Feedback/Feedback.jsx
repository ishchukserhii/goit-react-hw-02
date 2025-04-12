import React from "react";

const Feedback = ({ Counter, totalFeedback }) => {
  const positiveFeedback = Math.round((Counter.good / totalFeedback) * 100);

  return (
    <>
      <p>Good: {Counter.good}</p>
      <p>Neutral: {Counter.neutral}</p>
      <p>Bad: {Counter.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positiveFeedback}</p>
    </>
  );
};

export default Feedback;

import React from "react";

const Feedback = ({ Counter, totalFeedback, positiveFeedback }) => {
  

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

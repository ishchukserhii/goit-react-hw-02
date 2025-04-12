import { useEffect, useState } from "react";
import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import "./App.css";
import Notification from "../Notification/Notification";

function App() {
  const [votingData, setVotingData] = useState(
    () =>
      JSON.parse(localStorage.getItem("votingData")) ?? {
        good: 0,
        neutral: 0,
        bad: 0,
      }
  );
  const resetFeedback = () => {
    setVotingData({ good: 0, neutral: 0, bad: 0 });
  };
  useEffect(() => {
    localStorage.setItem("votingData", JSON.stringify(votingData));
  }, [votingData]);

  const totalFeedback = votingData.good + votingData.neutral + votingData.bad;
  const positiveFeedback = Math.round((votingData.good / totalFeedback) * 100);
  const updateFeedback = (feedbackType) => {
    setVotingData({
      ...votingData,
      [feedbackType]: votingData[feedbackType] + 1,
    });
  };

  return (
    <>
      <Description />
      <Options
        Counter={votingData}
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback === 0 && <Notification />}
      {totalFeedback > 0 && (<Feedback Counter={votingData} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback}/>
      )}
    </>
  );
}

export default App;

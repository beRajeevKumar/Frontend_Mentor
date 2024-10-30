import React, { useState, useEffect } from "react";
import Start from "./Components/Start";
import Quiz from "./Components/Quiz";

function App() {
  const [start, setStart] = useState(false);
  const amount = 5;
  const [score, setScore] = useState({
    totalQuestions: 0,
    totalCorrect: 0,
  });
  const [correctPercentage, setCorrectPercentage] = useState(0);

  function initializeScore() {
    const savedScore = JSON.parse(localStorage.getItem("userScore"));
    if (savedScore) {
      setScore({
        totalQuestions: savedScore.totalQuestions,
        totalCorrect: savedScore.totalCorrect,
      });
    } else {
      localStorage.setItem(
        "userScore",
        JSON.stringify({ totalQuestions: 0, totalCorrect: 0 })
      );
    }
  }

  useEffect(() => {
    initializeScore();
  }, []);

  function addQuestions() {
    const updatedTotalQuestions = score.totalQuestions + amount;
    localStorage.setItem(
      "userScore",
      JSON.stringify({ ...score, totalQuestions: updatedTotalQuestions })
    );
    setScore((prevScore) => ({
      ...prevScore,
      totalQuestions: updatedTotalQuestions,
    }));
  }

  function addCorrect(currentScore) {
    const updatedCorrectScore = score.totalCorrect + currentScore;
    localStorage.setItem(
      "userScore",
      JSON.stringify({ ...score, totalCorrect: updatedCorrectScore })
    );
    setScore((prevScore) => ({
      ...prevScore,
      totalCorrect: updatedCorrectScore,
    }));
  }

  useEffect(() => {
    if (score.totalQuestions > 0) {
      setCorrectPercentage(
        Math.ceil((score.totalCorrect / score.totalQuestions) * 100)
      );
    }
  }, [score]);

  return (
    <div className="container">
      <div className="circle top-right"></div>
      <div className="circle bottom-left"></div>
      <main>
        {start ? (
          <Quiz
            amount={amount}
            addQuestions={addQuestions}
            addCorrect={addCorrect}
          />
        ) : (
          <Start
            handleClick={() => {
              setStart(true);
            }}
            totalQuestions={score.totalQuestions}
            correctPercentage={correctPercentage}
          />
        )}
      </main>
    </div>
  );
}

export default App;

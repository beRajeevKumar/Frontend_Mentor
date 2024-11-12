import React from "react";

export default function Start({handleClick,totalQuestions,correctPercentage}){
    return (
        <div className="start-container">
            <h1>Trivia App</h1>
            <div className="record-container">
                <p className="record-questions">Questions Answered: {totalQuestions}</p>
                <p className="record-correct">Correct Answer Rate: {correctPercentage}%</p>
            </div>
            <button className="start-button" onClick={handleClick}>Start Quiz</button>
        </div>
    )
}

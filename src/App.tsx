import React, { useState } from "react";
import "./App.css";

function App() {
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "is used in React.js to increase performance?",
      options: [
        { id: 0, text: "Virtual DOM", isCorrect: true },
        { id: 1, text: "Original DOM", isCorrect: false },
        { id: 2, text: "Both Original & Virtual DOM", isCorrect: false },
        { id: 3, text: "None of the Above", isCorrect: false },
      ],
    },
    {
      text: "What is Babel?",
      options: [
        { id: 0, text: "A JavaScript transpiler", isCorrect: true },
        { id: 1, text: "A JavaScript interpreter", isCorrect: false },
        { id: 2, text: "A JavaScript compiler", isCorrect: false },
        { id: 3, text: "None of the Above", isCorrect: false },
      ],
    },
    {
      text: "A class is a type of function, but instead of using the keyword function to initiate it, which keyword do we use?",
      options: [
        { id: 0, text: "Constructor", isCorrect: false },
        { id: 1, text: "Class", isCorrect: true },
        { id: 2, text: "Object", isCorrect: false },
        { id: 3, text: "DataObject", isCorrect: false },
      ],
    },
  ];


  const optionClicked = (isCorrect: any) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">

      <h2>Score: {score}</h2>

      {showResults ? (

        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => resetGame()}>Back to Start</button>
        </div>
      ) : (

        <div className="question-card">
          <h2>
            Q: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;

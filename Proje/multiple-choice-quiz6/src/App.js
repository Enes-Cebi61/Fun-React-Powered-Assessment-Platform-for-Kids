import React, { useState } from "react";
import "./App.css";

function App() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
       // Question 1
    {
      text: "What are the characteristics of the Crow?",
      options: [
        { id: 0, text: "Beautiful feathers and the ability to fly quickly  ", isCorrect: false },
        { id: 1, text: " Large claws and sharp teeth", isCorrect: false },
        { id: 2, text: " Inability to fly and white feathers ", isCorrect: false },
        { id: 3, text: "Intelligence and quick thinking", isCorrect: true },
      ],
    },
       // Question 2
    {
      text: "What did the Fox ask from the Crow?",
      options: [
        { id: 0, text: "  Food", isCorrect: false },
        { id: 1, text: "A gift", isCorrect: false },
        { id: 2, text: "  A fruit tree", isCorrect: false },
        { id: 3, text: "A feather", isCorrect: true },
      ],
    },
       // Question 3
    {
      text: "What did the Fox do after taking the feather?",
      options: [
        { id: 0, text: " Quickly walked away from there ", isCorrect: true },
        { id: 1, text: "Returned the feather to the Crow", isCorrect: false },
        { id: 2, text: "  Tried to deceive the Crow", isCorrect: false },
        { id: 3, text: " Started eating the feather", isCorrect: false },
      ],
    },
       // Question 4
    {
      text: "	How did the Crow learn that the Fox had stolen the feather?",
      options: [
        { id: 0, text: "  Heard from other birds ", isCorrect: false },
        { id: 1, text: "  Fox confessed to him ", isCorrect: false },
        { id: 2, text: " At a meeting in the depths of the forest", isCorrect: true },
        { id: 3, text: " Followed the Fox and learned it", isCorrect: false },
      ],
    },
       // Question 5
    {
      text: "What did the Crow decide to do at the end of the story?",
      options: [
        { id: 0, text: "Decided to be more cautious and not trust others    ", isCorrect: true },
        { id: 1, text: "  Decided to deceive the Fox  ", isCorrect: false },
        { id: 2, text: " Decided to apologize to the Fox ", isCorrect: false },
        { id: 3, text: "Decided to visit the Fox to retrieve his feather", isCorrect: false },
      ],
    },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (

    <div className="App">
    <div className="app-container">
   {/* ... rest of your component */}
      
   </div>

      {/* 1. Header  */}
      <h1>The Crow and the Fox      </h1>

      {/* 2. Current Score  */}
      <h2>Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) *100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart Quiz</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
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

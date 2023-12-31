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
      text: "What was Eliza imagining when she lit the matches?",
      options: [
        { id: 0, text: "Delicious meals  ", isCorrect: false },
        { id: 1, text: " A warm bed   ", isCorrect: false },
        { id: 2, text: "Loved ones ", isCorrect: false },
        { id: 3, text: "All of the above", isCorrect: true },
      ],
    },
       // Question 2
    {
      text: "Why was Eliza trying to sell matches?",
      options: [
        { id: 0, text: "  To play games", isCorrect: false },
        { id: 1, text: " To eat", isCorrect: false },
        { id: 2, text: " To sleep in a warm bed", isCorrect: false },
        { id: 3, text: "To earn money and help her family", isCorrect: true },
      ],
    },
       // Question 3
    {
      text: "What did Eliza see when she struck her last match?",
      options: [
        { id: 0, text: " Her parents ", isCorrect: true },
        { id: 1, text: "Toys", isCorrect: false },
        { id: 2, text: " Sweets", isCorrect: false },
        { id: 3, text: "A warm fire", isCorrect: false },
      ],
    },
       // Question 4
    {
      text: "	What happened at the end of the story?",
      options: [
        { id: 0, text: "  Eliza continued her life happily. ", isCorrect: false },
        { id: 1, text: "  Eliza became very rich.", isCorrect: false },
        { id: 2, text: " Eliza was found lifeless on the street, but there was a smile on her face.", isCorrect: true },
        { id: 3, text: "Eliza found her family and reunited with them.", isCorrect: false },
      ],
    },
       // Question 5
    {
      text: "What emotion did Eliza feel at the end of her imaginary world with the matches?",
      options: [
        { id: 0, text: "Fear  ", isCorrect: false },
        { id: 1, text: " Sadness   ", isCorrect: false },
        { id: 2, text: " Happiness ", isCorrect: true },
        { id: 3, text: "Anger", isCorrect: false },
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
      <h1>The Little Match Girl    </h1>

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

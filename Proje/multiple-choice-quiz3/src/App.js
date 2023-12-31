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
      
      text: "	Who called the Ugly Duckling 'ugly'?",
      options: [
        { id: 0, text: "Other ducks ", isCorrect: true },
        { id: 1, text: " Mother and father", isCorrect: false },
        { id: 2, text: "Humans ", isCorrect: false },
        { id: 3, text: "Wolves", isCorrect: false },
      ],
    },
       // Question 2
    {
      text: "Why did the Ugly Duckling feel lonely and unhappy?",
      options: [
        { id: 0, text: "It wasn't eating at all ", isCorrect: false },
        { id: 1, text: "It wasn't playing with other birds", isCorrect: false },
        { id: 2, text: "  It wasn't playing with other birds", isCorrect: false },
        { id: 3, text: "Its feathers were uneven and gray ", isCorrect: true },
      ],
    },
       // Question 3
    {
      text: "Why did the Ugly Duckling decide to go far away?",
      options: [
        { id: 0, text: "To find other ducks ", isCorrect: false },
        { id: 1, text: "To be accepted and discover itself", isCorrect: true },
        { id: 2, text: "To find a better pond", isCorrect: false },
        { id: 3, text: "To compete with other birds", isCorrect: false },
      ],
    },
       // Question 4
    {
      text: "How did the Ugly Duckling spend the winter season?",
      options: [
        { id: 0, text: " Found a warm place in another pond", isCorrect: false },
        { id: 1, text: " Struggled to survive in harsh conditions", isCorrect: true },
        { id: 2, text: " Migrated with other birds", isCorrect: false },
        { id: 3, text: "Tried to whiten its feathers", isCorrect: false },
      ],
    },
       // Question 5
    {
      text: "What is the moral of the story?",
      options: [
        { id: 0, text: "Emphasizing the importance of appearance ", isCorrect: false },
        { id: 1, text: " Conveying that differences should not lead to exclusion  ", isCorrect: true },
        { id: 2, text: "Describing that all ducks are different", isCorrect: false },
        { id: 3, text: "Stating that everyone should be beautiful", isCorrect: false },
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
      <h1>The Ugly Duckling      </h1>

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

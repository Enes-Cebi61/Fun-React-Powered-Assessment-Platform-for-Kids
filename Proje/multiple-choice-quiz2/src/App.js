import React, { useState } from "react";
import "./App.css";

function App() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
        // ... (an array of objects representing quiz questions)
    // Question 1

    {
      text: "How does the hen make the farmer's life better?",
      options: [
        { id: 0, text: "By laying golden eggs for the farmer", isCorrect: true },
        { id: 1, text: "By dancing for the farmer", isCorrect: false },
        { id: 2, text: "By telling stories to the farmer", isCorrect: false },
        { id: 3, text: "By drawing pictures for the farmer", isCorrect: false },
      ],
    },
        // Question 2

    {
      text: "Why did the farmer and his wife cut the hen?",
      options: [
        { id: 0, text: "Because the hen was too noisy", isCorrect: false },
        { id: 1, text: "Because the hen was sick", isCorrect: false },
        { id: 2, text: " Because the farmer and his wife were very hungry", isCorrect: false },
        { id: 3, text: "To see the golden egg inside the hen ", isCorrect: true },
      ],
    },
        // Question 3

    {
      text: "What ability does the hen have?",
      options: [
        { id: 0, text: "Ability to fly ", isCorrect: false },
        { id: 1, text: "Ability to lay golden eggs", isCorrect: true },
        { id: 2, text: "Dancing ability", isCorrect: false },
        { id: 3, text: "Ability to crow loudly", isCorrect: false },
      ],
    },
        // Question 4

    {
      text: "What is the moral of the story?",
      options: [
        { id: 0, text: "howing that golden eggs are not real", isCorrect: false },
        { id: 1, text: " Emphasizing the consequences of greed", isCorrect: true },
        { id: 2, text: " Explaining how hens communicate with humans", isCorrect: false },
        { id: 3, text: "Explaining why hens have beautiful feathers", isCorrect: false },
      ],
    },
        // Question 5

    {
      text: "How did the farmer and his wife feel after losing their hen?",
      options: [
        { id: 0, text: "Happy and wealthy", isCorrect: false },
        { id: 1, text: "Sad and regretful", isCorrect: true },
        { id: 2, text: "They didn't feel anything", isCorrect: false },
        { id: 3, text: " Angry and annoyed", isCorrect: false },
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
      <h1>The Golden Egg-Laying Hen      </h1>

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

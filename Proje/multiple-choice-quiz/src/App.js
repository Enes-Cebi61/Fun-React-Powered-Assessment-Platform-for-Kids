import React, { useState } from "react";
import "./App.css";

function App() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  // Array of questions with their options and correct answers

  const questions = [
        // Question 1

    {
      text: "How did the grasshopper spend summer days?",
      options: [
        { id: 0, text: " Sleeping", isCorrect: false },
        { id: 1, text: "Working and collecting food", isCorrect: false },
        { id: 2, text: "Making preparations for winter", isCorrect: false },
        { id: 3, text: "Singing and having fun", isCorrect: true },
      ],
    },
        // Question 2

    {
      text: "Why was the ant diligently collecting food?",
      options: [
        { id: 0, text: "Because it needed food for winter", isCorrect: true },
        { id: 1, text: "For the grasshopper", isCorrect: false },
        { id: 2, text: "Because it needed food for winter", isCorrect: false },
        { id: 3, text: "To comple with other insects ", isCorrect: false },
      ],
    },
        // Question 3

    {
      text: "	When did the grasshopper ask for help from the ant?",
      options: [
        { id: 0, text: "At the end of summer ", isCorrect: true },
        { id: 1, text: "In the middle of winter", isCorrect: false },
        { id: 2, text: " During spring", isCorrect: false },
        { id: 3, text: "Never asked for help", isCorrect: false },
      ],
    },
        // Question 4

    {
      text: "What did the ant try to teach the grasshopper?",
      options: [
        { id: 0, text: "The value of laziness and entertainment", isCorrect: false },
        { id: 1, text: "The importance of preparing for winter", isCorrect: true },
        { id: 2, text: " How to sing", isCorrect: false },
        { id: 3, text: "How to dance", isCorrect: false },
      ],
    },
        // Question 5

    {
      text: "What is the moral of the story?",
      options: [
        { id: 0, text: "Emphasizing the value of laziness and entertainment", isCorrect: false },
        { id: 1, text: "Emphasizing the importance of hard work and preparation", isCorrect: true },
        { id: 2, text: "Highlighting the importance of seeking help from friends when needed", isCorrect: true },
        { id: 3, text: "Describing the beauty of the forest", isCorrect: false },
      ],
    },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score if the answer is correct
    if (isCorrect) {
      setScore(score + 1);
    }
    // Move to the next question or show results if it's the last question

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  // Resets the game back to default
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };
  // JSX

  return (

    <div className="App">
    <div className="app-container">
   {/* ... rest of your component */}
      
   </div>

      {/* 1. Header  */}
      <h1>The Grasshopper and the Ant</h1>

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

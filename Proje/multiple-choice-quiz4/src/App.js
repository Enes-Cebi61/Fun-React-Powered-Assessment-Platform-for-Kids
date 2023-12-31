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
      text: "Why did the farmer decide to sell the donkey? ",
      options: [
        { id: 0, text: " The donkey was too old and couldn't plow the field  ", isCorrect: true },
        { id: 1, text: "The donkey was sick.", isCorrect: false },
        { id: 2, text: " The farmer wanted to get another donkey. ", isCorrect: false },
        { id: 3, text: "The farmer wanted to go to Bremen.", isCorrect: false },
      ],
    },
       // Question 2
    {
      text: "Which animals did the donkey encounter on the road?",
      options: [
        { id: 0, text: "A cow, a horse, a sheep, and a wolf. ", isCorrect: true },
        { id: 1, text: "A dog, a cat, a rooster, and a duck.", isCorrect: false },
        { id: 2, text: "A chicken, a duck, a goose, and a turkey. ", isCorrect: false },
        { id: 3, text: "A fox, a rabbit, a beaver, and a wild boar. ", isCorrect: false },
      ],
    },
       // Question 3
    {
      text: "In which city did they decide to form a music band?",
      options: [
        { id: 0, text: " Berlin ", isCorrect: false },
        { id: 1, text: "Bremen", isCorrect: true },
        { id: 2, text: " Hamburg", isCorrect: false },
        { id: 3, text: "Cologne", isCorrect: false },
      ],
    },
       // Question 4
    {
      text: "Why did the animals decide to spend the night in the forest?",
      options: [
        { id: 0, text: " They got lost on the road.", isCorrect: false },
        { id: 1, text: " To spend the night while going to Bremen.", isCorrect: true },
        { id: 2, text: " They wanted to see the beauty of the forest.", isCorrect: false },
        { id: 3, text: "They wanted to experience a night adventure", isCorrect: false },
      ],
    },
       // Question 5
    {
      text: "What kind of life did the animals find in the depths of the forest?",
      options: [
        { id: 0, text: "They built a village and lived there  ", isCorrect: false },
        { id: 1, text: " They found happiness in friendship and singing.  ", isCorrect: true },
        { id: 2, text: "They continued their journey to Bremen.", isCorrect: false },
        { id: 3, text: "They were captured by hunters in the forest.", isCorrect: false },
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
      <h1>The Musicians of Bremen     </h1>

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

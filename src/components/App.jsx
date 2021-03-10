import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function Question(props) {
  return (
    <div className="Question">
      {props.text}
      {props.answer.map((answerchoice) => {
        return <Answer text={answerchoice} />;
      })}
    </div>
  );
}
function Answer(props) {
  return <h1>{props.text}</h1>;
}

function App() {
  const [isAnswered, setIsAnswered] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const currentCorrectChoice =
    data[currentQuestion].question.correct_choice_index;


  const handleClick = () => {
    setIsAnswered(true);
  };

  const handleNextQuestionClick = () => {
    setCurrentQuestion(currentQuestion + 1)
    setIsAnswered(false);
  }

  return (
    <div className="app">
      <p> Trivia!</p>
      <Question
        text={data[currentQuestion].question.text}
        answer={data[currentQuestion].question.choices}
      />
      <button onClick={handleClick}>Answer Question</button>

      {/* short circuit */}
      {isAnswered && <p>The correct answer is: {data[currentQuestion].question.choices[currentCorrectChoice]}</p>}
      
      <NextQuestion 
        handleClick={handleNextQuestionClick}
      />
    </div>
  );
}

function NextQuestion(props) {
  return <button onClick={props.handleClick}>Next Question</button>;
}

export default App;

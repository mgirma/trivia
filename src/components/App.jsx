import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function Question(props) {
  return (
    <div className="Question">
      {props.text}
      {props.answer.map((answerchoice) => {
        return (
          <Answer text={answerchoice} />
        );
      })}
    </div>
  );
}
function Answer(props){ 
  return (
    <h1>{props.text}</h1>
  )
}

// const [get,set] = useState(false);
function App() {
  var currentQuestion = 0;
  //const [myState, setMyState] = useState(false);
  return (
    <div className="app">
      <p> Trivia!</p>
      <Question text={data[currentQuestion].question.text} answer={data[currentQuestion].question.choices}/>
      <NextQuestion/>
    </div>
  );
}

function NextQuestion() {
  return <button>Click Me</button>;
}

export default App;

import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function Question(props) {
  console.log(props);
  return <div className="Question">{props.text}</div>;
}

function App() {
  var currentQuestion = 0;

  return (
    <div className="app">
      <p> Trivia!</p>
      <Question text={data[currentQuestion].question.text} />
      <NextQuestion />
    </div>
  );
}

function NextQuestion() {
  return <button>Click Me</button>;
}

export default App;

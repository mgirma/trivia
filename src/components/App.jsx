import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

// {
//  text: 'something'
// }

function Question(props) {
  console.log(props);
  return (
    <div className="Question">
      {props.text}
      <Answer text="Answer goes here" /> {/* <= props are getting passed into Answer here */}
    </div>
  );
}
function Answer(props){ // <= props are right here
  return (
    <h1>{props.text}</h1>
  )
}

function App() {
  var currentQuestion = 0;

  return (
    <div className="app">
      <p> Trivia!</p>
      <Question text={data[currentQuestion].question.text} answer={}/>
      <NextQuestion />
    </div>
  );
}

function NextQuestion() {
  return <button>Click Me</button>;
}

export default App;

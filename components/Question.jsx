import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";
import { useState } from "react";
import QUESTIONS from "../src/questions.js";
export default function Question({ index, onSkipAnswer, onSelectAnswer }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  let timer = 5000
  if(answer.selectedAnswer){
    timer = 1000
  }
  if(answer.isCorrect!=null){
    timer = 2000
  }

  function handleSelectAnswer(answer) {
    setAnswer({ selectedAnswer: answer, isCorrect: null });
    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTIONS[index].answers[0] === answer,
      });
      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  }

  let answerState = "";
  if (answer.selectedAnswer && answer.isCorrect != null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer && answer.isCorrect == null) {
    answerState = "answered";
  }
  return (
    <div id="question">
      <QuestionTimer key={timer} timeout={timer} onTimeout={answer.selectedAnswer ==='' ? onSkipAnswer : null} />
      <h2>{QUESTIONS[index].text}</h2>
      <Answers
        answers={QUESTIONS[index].answers}
        selectedAnswers={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
}

import { useCallback, useState } from "react";
import QUESTIONS from "../src/questions.js";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevAnswer) => [...prevAnswer, selectedAnswer]);
  }

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return <Summary userAnswer={userAnswers} />
  }

  return (
    <div id="quiz">
      <Question index={activeQuestionIndex} onSkipAnswer={handleSkipAnswer}
      onSelectAnswer={handleSelectAnswer} key={activeQuestionIndex}/>
    </div>
  );
}

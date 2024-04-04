import { useCallback, useState } from "react";
import QUESTIONS from "../src/questions.js";
import CompleteImg from "../src/assets/quiz-complete.png";
import Question from "./Question.jsx";

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
    return (
      <div id="summary">
        <img src={CompleteImg} alt="Quiz Completed" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      
      <Question index={activeQuestionIndex} onSkipAnswer={handleSkipAnswer}
      onSelectAnswer={handleSelectAnswer} key={activeQuestionIndex}/>
    </div>
  );
}

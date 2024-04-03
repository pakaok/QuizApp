import { useCallback, useState } from "react";
import QUESTIONS from "../src/questions.js";
import CompleteImg from "../src/assets/quiz-complete.png";
import Question from "./Question.jsx";

export default function Quiz() {
  const [answerState, setAnswerState] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  function handleSelectAnswer(selectedAnswer) {
    setAnswerState("answered");
    setUserAnswers((prevAnswer) => [...prevAnswer, selectedAnswer]);
    setTimeout(() => {
      if (selectedAnswer == QUESTIONS[activeQuestionIndex].answers[0]) {
        setAnswerState("correct");
      } else {
        setAnswerState("wrong");
      }
      setTimeout(() => {
        setAnswerState("");
      }, 2000);
    }, 1000);
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
      
      <Question onSkipAnswer={handleSkipAnswer}  questionText={QUESTIONS[activeQuestionIndex].text} 
      answers={QUESTIONS[activeQuestionIndex].answers}  selectedAnswers={userAnswers[userAnswers.length - 1]} 
       answerState={answerState} onSelectAnswer={handleSelectAnswer} key={activeQuestionIndex}/>
    </div>
  );
}

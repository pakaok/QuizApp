import { useState } from "react";
import QUESTIONS from "../src/questions.js";
import CompleteImg from "../src/assets/quiz-complete.png"
export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length
  
  function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevAnswer) => [...prevAnswer, selectedAnswer]);
  }

  if (quizIsComplete){
    return <div id="summary">
        <img src={CompleteImg} alt="Quiz Completed" />
        <h2>Quiz Completed!</h2>
    </div>
  }
  
  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

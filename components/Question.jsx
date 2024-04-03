import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";

export default function Question({onSkipAnswer,questionText,answers,selectedAnswers,answerState,onSelectAnswer }) {
  return (
    <div id="question">
      <QuestionTimer
        timeout={5000}
        onTimeout={onSkipAnswer}
      />
      <h2>{questionText}</h2>
      <Answers
        answers={answers}
        selectedAnswers={selectedAnswers}
        answerState={answerState}
        onSelect={onSelectAnswer}
      />
    </div>
  );
}

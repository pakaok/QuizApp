import CompleteImg from "../src/assets/quiz-complete.png";
import QUESTIONS from "../src/questions";
export default function Summary({ userAnswer }) {
const skippedAnswer = userAnswer.filter((answer)=> answer===null)
const correctAnswer = userAnswer.filter((answer,index)=> answer===QUESTIONS[index].answers[0])
const skippedAnswerShare = Math.round(skippedAnswer.length/userAnswer.length * 100)
const correctAnswerShare = Math.round(correctAnswer.length /userAnswer.length* 100)
const wrongAnswerShare= 100 - skippedAnswerShare - correctAnswerShare

  return (
    <div id="summary">
      <img src={CompleteImg} alt="Quiz Completed" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswerShare}%</span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswerShare}%</span>
          <span className="text">Answered Correctly</span>
        </p>
        <p>
          <span className="number">{wrongAnswerShare}%</span>
          <span className="text">Answered Incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswer.map((answer, index) => {
            let cssClass='user-answer'
            if(answer===null){
                cssClass+=' skipped'
            }else if(answer===QUESTIONS[index].answers[0]){
                cssClass+=' correct'
            }else {
                cssClass+=' wrong'
            }
          return (
            <li key={answer}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClass}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

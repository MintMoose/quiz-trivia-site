import React from "react";
import SingleQuestion from "./SingleQuestion.js";

export default function QuestionPage(props) {
  const questionList = props.question.map((element) => {
    return (
      <SingleQuestion
        key={element.id}
        id={element.id}
        done={props.done}
        handleClick={(obj) => props.handler({ element, obj })}
        {...element}
      />
    );
  });

  return (
    <div className="entire-div">
      <div className="questionpage-div">
        <div className={props.done ? "disabled" : ""}>{questionList}</div>
        <div className="inline-button">
          {props.done && (
            <span>
              You scored {props.numCorrect}/{questionList.length} correct
              answers
            </span>
          )}
          <button onClick={props.checkAnswers} className="submit--button">
            {props.done ? "New Game" : "Check answers"}
          </button>
        </div>
      </div>
    </div>
  );
}

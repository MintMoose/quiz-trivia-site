import React from "react";

export default function SingleQuestion(props) {
  const theButtons = props.answers.map((element, index) => {
    const styles = {
      backgroundColor:
        props.done && props.correct === element
          ? "#94D7A2"
          : props.done && props.selected === element
          ? "#F8BCBC"
          : "",
      opacity: props.done && props.correct !== element && 0.5,
    };

    return (
      <div key={index} className="question-answers">
        <input
          type="radio"
          name={props.correct}
          checked={props.selected === element}
          onChange={(e) => {}}
        />
        <label style={styles} onClick={() => props.handleClick(element)}>
          {element}
        </label>
      </div>
    );
  });

  return (
    <div data-testid={`question-${props.id}`} className="each-question">
      <h3>{props.question}</h3>
      <div className="button-row">{theButtons}</div>
      <hr />
    </div>
  );
}

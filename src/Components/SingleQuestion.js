import React from "react";

export default function singleQuestion(props) {
  // const handleClick = () => {
  //     console.log("Clicky")
  // }

  const theButtons = props.answers.map((element) => {
    const styles = {
      backgroundColor:
        props.done && props.correct === element
          ? "#94D7A2"
          : props.done && props.selected === element
          ? "#F8BCBC"
          : "",
      opacity: props.done && props.correct !== element && 0.5,
    };
    // return <button>{element}</button>
    return (
      <div className="question-answers">
        <input
          type="radio"
          name={props.correct}
          checked={props.selected === element}
          onChange={(e) => {}}
        ></input>
        <label style={styles} onClick={() => props.handleClick(element)}>
          {element}
        </label>
      </div>
    );
  });

  return (
    <div className="each-question">
      <h3>{props.question}</h3>
      <div className="button-row">{theButtons}</div>
      <hr />
    </div>
  );
}

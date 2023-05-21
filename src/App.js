import React from "react";
import HomePage from "./Components/HomePage.js";
import QuestionPage from "./Components/QuestionPage.js";
import { nanoid } from "nanoid";
import he from "he";
import "./App.css";

export default function App() {
  const [showPage, setShowPage] = React.useState(true);
  const [theQuestion, setTheQuestion] = React.useState([]);
  const [numCorrect, setNumCorrect] = React.useState(0);
  const [submit, setSubmit] = React.useState(false);

  function hideHomePage() {
    setShowPage(false);
  }

  function checkAnswers() {
    if (submit) {
      renderMyData();
      setSubmit(false);
    } else {
      let count = 0;
      theQuestion.forEach((element) => {
        element.correct === element.selected ? (count += 1) : (count += 0);
      });
      setNumCorrect(count);
      setSubmit(true);
    }
  }

  React.useEffect(() => {
    renderMyData();
  }, []);

  function shuffle(arr) {
    var j, x, index;
    for (index = arr.length - 1; index > 0; index--) {
      j = Math.floor(Math.random() * (index + 1));
      x = arr[index];
      arr[index] = arr[j];
      arr[j] = x;
    }
    return arr;
  }

  async function renderMyData() {
    let questions = [];
    const response = await fetch(
      "https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple"
    );
    let data = await response.json();

    data.results.forEach((quest) => {
      questions.push({
        id: nanoid(),
        question: he.decode(quest.question),
        correct: he.decode(quest.correct_answer),
        answers: shuffle([
          ...quest.incorrect_answers.map((answer) => he.decode(answer)),
          he.decode(quest.correct_answer),
        ]),
        selected: "",
      });
    });

    setTheQuestion(questions);
  }

  const changedSelected = ({ element, obj }) => {
    setTheQuestion((oldState) =>
      oldState.map((question) => {
        return question.id === element.id
          ? { ...question, selected: obj }
          : question;
      })
    );
  };

  return (
    <div>
      {showPage && <HomePage hideHomePageRequest={hideHomePage} />}
      {!showPage && (
        <QuestionPage
          done={submit}
          numCorrect={numCorrect}
          question={theQuestion}
          checkAnswers={checkAnswers}
          handler={(obj) => changedSelected(obj)}
        />
      )}
    </div>
  );
}

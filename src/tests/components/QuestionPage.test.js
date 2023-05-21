import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import QuestionPage from "../../Components/QuestionPage";
import SingleQuestion from "../../Components/SingleQuestion";

describe("QuestionPage", () => {
  const questions = [
    {
      id: 1,
      question: "What is the capital of France?",
      answers: ["Paris", "London", "Berlin"],
      correctAnswer: "Paris",
    },
    {
      id: 2,
      question: "What is the largest planet in our solar system?",
      answers: ["Mars", "Jupiter", "Saturn"],
      correctAnswer: "Jupiter",
    },
  ];

  test("renders a list of SingleQuestion components", () => {
    render(<QuestionPage question={questions} done={false} />);
    const singleQuestionElements = screen.getAllByTestId(/^question-\d+$/);
    expect(singleQuestionElements.length).toBe(questions.length);
  });

  test("displays the score when done is true", () => {
    const numCorrect = 1;
    render(
      <QuestionPage question={questions} done={true} numCorrect={numCorrect} />
    );
    const scoreElement = screen.getByText(
      `You scored ${numCorrect}/${questions.length} correct answers`
    );
    expect(scoreElement).toBeInTheDocument();
  });

  test("calls checkAnswers when the button is clicked", () => {
    const checkAnswersMock = jest.fn();
    render(
      <QuestionPage
        question={questions}
        done={false}
        checkAnswers={checkAnswersMock}
      />
    );
    const button = screen.getByText("Check answers");
    fireEvent.click(button);
    expect(checkAnswersMock).toHaveBeenCalled();
  });

  test("calls handleClick when an answer is selected", () => {
    const handleClickMock = jest.fn();
    render(
      <QuestionPage
        question={questions}
        done={false}
        handler={handleClickMock}
      />
    );

    const singleQuestionElement = screen.getByTestId("question-1");
    const answerLabel = singleQuestionElement.querySelector("label");

    fireEvent.click(answerLabel);

    expect(handleClickMock).toHaveBeenCalledWith({
      element: questions[0],
      obj: questions[0].answers[0],
    });
  });
});

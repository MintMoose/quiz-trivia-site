import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import SingleQuestion from "../../Components/SingleQuestion";
import "@testing-library/jest-dom/extend-expect";

describe("SingleQuestion", () => {
  const question = "What is the capital of France?";
  const answers = ["Paris", "London", "Berlin"];
  const correctAnswer = "Paris";

  test("renders question and answer options", () => {
    render(
      <SingleQuestion
        id={1}
        question={question}
        answers={answers}
        correct={correctAnswer}
        selected={null}
        done={false}
        handleClick={() => {}}
      />
    );

    // Check if question is rendered
    expect(screen.getByText(question)).toBeInTheDocument();

    // Check if answer options are rendered
    answers.forEach((answer) => {
      expect(screen.getByText(answer)).toBeInTheDocument();
    });
  });

  test("applies correct styles when an answer is selected and done", () => {
    const selectedAnswer = "London";

    render(
      <SingleQuestion
        id={1}
        question={question}
        answers={answers}
        correct={correctAnswer}
        selected={selectedAnswer}
        done={true}
        handleClick={() => {}}
      />
    );

    // Check if selected answer has correct styles
    const selectedLabel = screen.getByText(selectedAnswer);
    expect(selectedLabel).toHaveStyle("background-color: #F8BCBC");

    // Check if correct answer has correct styles
    const correctLabel = screen.getByText(correctAnswer);
    expect(correctLabel).toHaveStyle("background-color: #94D7A2");

    // Check if other answers have correct opacity
    answers.forEach((answer) => {
      const label = screen.getByText(answer);
      if (answer !== selectedAnswer && answer !== correctAnswer) {
        expect(label).toHaveStyle("opacity: 0.5");
      } else {
        expect(label).not.toHaveStyle("");
      }
    });
  });

  test("calls handleClick when an answer is clicked", () => {
    const handleClickMock = jest.fn();

    render(
      <SingleQuestion
        id={1}
        question={question}
        answers={answers}
        correct={correctAnswer}
        selected={null}
        done={false}
        handleClick={handleClickMock}
      />
    );

    // Click on an answer
    const answerLabel = screen.getByText(answers[0]);
    fireEvent.click(answerLabel);

    // Check if handleClick is called with the selected answer
    expect(handleClickMock).toHaveBeenCalledWith(answers[0]);
  });
});

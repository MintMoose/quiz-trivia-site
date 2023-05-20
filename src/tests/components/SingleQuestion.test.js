import { render, screen, cleanup } from "@testing-library/react";
import SingleQuestion from "../../Components/SingleQuestion";
import "@testing-library/jest-dom/extend-expect";

test("Should render SingleQuestion Componenet", () => {
  const mockAnswers = ["Yes", "No", "$£45", "Sometimes", "@SQL;"];
  const question = "Is this how you mock data in jest?";
  const id = 1;

  render(<SingleQuestion answers={mockAnswers} question={question} id={id} />);
  const singleQuestionElement = screen.getByTestId(`question-${id}`);

  expect(singleQuestionElement).toBeInTheDocument();
});

test("Should render the question text in SingleQuestion Componenet", () => {
  const mockAnswers = ["Yes", "No", "$£45", "'Sometimes'", "@SQL;"];
  const question = "Is this how you mock data in jest?";
  const id = 1;

  render(<SingleQuestion answers={mockAnswers} question={question} id={id} />);
  const singleQuestionElement = screen.getByTestId(`question-${id}`);

  expect(singleQuestionElement).toContainHTML(question);
});

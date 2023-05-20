import { render, screen, cleanup } from "@testing-library/react";
import SingleQuestion from "../../Components/SingleQuestion";

test("Should render SingleQuestion Componenet", () => {
  const mockAnswers = ["Yes", "No", "$£45", "Sometimes", "@SQL;"];
  const question = "Is this how you mock data in jest?";
  render(<SingleQuestion answers={mockAnswers} question={question} />);
  const singleQuestionElement = screen.getByTestId("single-question");
  expect(singleQuestionElement).toBeInTheDocument();
});

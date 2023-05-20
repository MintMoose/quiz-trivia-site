import { render, screen, cleanup } from "@testing-library/react";
import SingleQuestion from "../../Components/SingleQuestion";

test("Should render SingleQuestion Componenet", () => {
  render(<SingleQuestion />);
  const singleQuestionElement = screen.getByTestId("single-question");
  expect(singleQuestionElement).toBeInTheDocument();
});

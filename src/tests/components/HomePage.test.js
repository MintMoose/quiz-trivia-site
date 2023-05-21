import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import HomePage from "../../Components/HomePage";
import "@testing-library/jest-dom/extend-expect";

describe("HomePage", () => {
  test("renders the component correctly", () => {
    render(<HomePage hideHomePageRequest={jest.fn()} />);

    // Check if the component renders the expected content
    const headingElement = screen.getByText("Quizzical");
    const descriptionElement = screen.getByText("Some description if needed");
    const buttonElement = screen.getByText("Start quiz");

    expect(headingElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  test("calls hideHomePageRequest when the button is clicked", () => {
    const hideHomePageRequestMock = jest.fn();
    render(<HomePage hideHomePageRequest={hideHomePageRequestMock} />);

    // Click on the button
    const buttonElement = screen.getByText("Start quiz");
    fireEvent.click(buttonElement);

    // Check if hideHomePageRequestMock is called
    expect(hideHomePageRequestMock).toHaveBeenCalled();
  });
});

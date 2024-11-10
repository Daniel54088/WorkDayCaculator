import "@testing-library/jest-dom";
import { screen, fireEvent, rtlRender } from "@/testing/test-utils";
import { AnswerOptions } from "../components/answer-options";

describe("AnswerOptions component", () => {
  const mockSetSelectedAnswer = vi.fn();
  const mockAnswers = ["Option 1", "Option 2", "Option 3"];
  const mockSelectedAnswer = "Option 1";

  test("renders all provided answers correctly", () => {
    rtlRender(
      <AnswerOptions
        answers={mockAnswers}
        selectedAnswer={mockSelectedAnswer}
        setSelectedAnswer={mockSetSelectedAnswer}
      />
    );

    mockAnswers.forEach((answer) => {
      const radioItem = screen.getByLabelText(answer); // Match radio input by its label
      expect(radioItem).toBeInTheDocument();
      expect(radioItem).toHaveAttribute("type", "button");
    });
  });

  test("calls setSelectedAnswer when an option is selected", () => {
    rtlRender(
      <AnswerOptions
        answers={mockAnswers}
        selectedAnswer={mockSelectedAnswer}
        setSelectedAnswer={mockSetSelectedAnswer}
      />
    );

    // Simulate selecting a different answer
    const radioItem = screen.getByLabelText("Option 2");
    fireEvent.click(radioItem);

    // Ensure setSelectedAnswer was called with the correct value
    expect(mockSetSelectedAnswer).toHaveBeenCalledWith("Option 2");
  });

  test("renders no radio items if answers are undefined", () => {
    rtlRender(
      <AnswerOptions
        answers={undefined}
        selectedAnswer={mockSelectedAnswer}
        setSelectedAnswer={mockSetSelectedAnswer}
      />
    );

    const radioItems = screen.queryAllByRole("radio");
    expect(radioItems.length).toBe(0);
  });
});

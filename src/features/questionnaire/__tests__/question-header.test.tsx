import "@testing-library/jest-dom";
import { screen, rtlRender } from "@/testing/test-utils";
import { QuestionHeader } from "../components/question-header";

describe("QuestionHeader component", () => {
  test("renders correctly with question", () => {
    const mockQuestion = "What is your favorite color?";

    rtlRender(<QuestionHeader question={mockQuestion} />);

    const questionElement = screen.getByText(mockQuestion);
    expect(questionElement).toBeInTheDocument();
  });

  test("renders correctly with undefined question", () => {
    rtlRender(<QuestionHeader question={undefined} />);

    // Check that the element is still rendered but contains no text content
    const questionElement = screen.getByRole("heading", { level: 2 });
    expect(questionElement).toBeInTheDocument();
    expect(questionElement).toBeEmptyDOMElement();
  });
});

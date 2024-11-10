import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import Questionnaire from "../index";
import {
  fetchInitialQuestion,
  fetchNextQuestion,
} from "@/features/question-thunk";
import { useAppDispatch, useAppSelector } from "@/hooks/react-redux";
import { useNavigate } from "react-router-dom";

// Mock useAppDispatch, useAppSelector, and useNavigate
vi.mock("@/hooks/react-redux");
vi.mock("react-router-dom", () => ({
  useNavigate: vi.fn(),
}));

// Mock the thunks
vi.mock("@/features/question-thunk", () => ({
  fetchInitialQuestion: vi.fn(),
  fetchNextQuestion: vi.fn(),
}));

describe("Questionnaire component", () => {
  const mockDispatch = vi.fn();
  const mockNavigate = vi.fn();

  beforeEach(() => {
    (useAppDispatch as vi.Mock).mockReturnValue(mockDispatch);
    (useNavigate as vi.Mock).mockReturnValue(mockNavigate);

    // Reset mocks before each test
    mockDispatch.mockClear();
    mockNavigate.mockClear();
    localStorage.clear();
  });

  it("dispatches fetchInitialQuestion on mount", () => {
    (useAppSelector as vi.Mock).mockReturnValue({
      loading: false,
      question: {},
      match: null,
    });

    render(<Questionnaire />);

    // Ensure fetchInitialQuestion is dispatched
    expect(mockDispatch).toHaveBeenCalledWith(fetchInitialQuestion());
  });

  it("disables the button when no answer is selected", () => {
    (useAppSelector as vi.Mock).mockReturnValue({
      loading: false,
      question: { answers: ["Answer 1"] },
      match: null,
    });

    render(<Questionnaire />);

    // Button should be disabled initially because no answer is selected
    const button = screen.getByRole("button", { name: /ok/i });
    expect(button).toBeDisabled();
  });

  it("dispatches fetchNextQuestion when button is clicked", () => {
    (useAppSelector as vi.Mock).mockReturnValue({
      loading: false,
      question: { step_id: 1, answers: ["Answer 1"] },
      match: null,
    });

    render(<Questionnaire />);

    // Select an answer
    const answerOption = screen.getByLabelText("Answer 1");
    fireEvent.click(answerOption);

    // Button should be enabled now
    const button = screen.getByRole("button", { name: /ok/i });
    expect(button).not.toBeDisabled();

    // Click the button
    fireEvent.click(button);

    // Ensure fetchNextQuestion is dispatched with the correct payload
    expect(mockDispatch).toHaveBeenCalledWith(
      fetchNextQuestion({ step_id: 1, answer: "Answer 1" })
    );
  });

  it("navigates to /result and stores match in localStorage when match exists", () => {
    const mockMatch = { name: "Tree", description: "A nice tree" };
    (useAppSelector as vi.Mock).mockReturnValue({
      loading: false,
      question: {},
      match: mockMatch,
    });

    render(<Questionnaire />);

    // Ensure match is stored in localStorage
    expect(localStorage.getItem("match")).toEqual(JSON.stringify(mockMatch));

    // Ensure navigation to /result
    expect(mockNavigate).toHaveBeenCalledWith("/result");
  });
});

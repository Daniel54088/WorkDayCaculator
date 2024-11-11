import { render, screen, fireEvent } from "@testing-library/react";
import ResultSection from "../components/result-section";

describe("ResultSection Component", () => {
  const mockOnReset = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders the result correctly", () => {
    render(<ResultSection result={5} onReset={mockOnReset} />);

    // Verify that the result is displayed correctly
    expect(screen.getByText("5 days.")).toBeInTheDocument();
  });

  it("displays 0 days when result is null", () => {
    render(<ResultSection result={null} onReset={mockOnReset} />);

    // Verify that it defaults to 0 days when result is null
    expect(screen.getByText("0 days.")).toBeInTheDocument();
  });

  it("calls onReset when the reset button is clicked", () => {
    render(<ResultSection result={5} onReset={mockOnReset} />);

    const resetButton = screen.getByRole("button", { name: /start over/i });

    // Simulate clicking the reset button
    fireEvent.click(resetButton);

    // Verify that the onReset callback is called
    expect(mockOnReset).toHaveBeenCalled();
  });
});

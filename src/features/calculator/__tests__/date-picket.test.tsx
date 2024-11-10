import { render, screen, fireEvent } from "@testing-library/react";
import DatePicker from "../components/date-picker";

describe("DatePicker Component", () => {
  const mockOnChange = vi.fn();
  const label = "Start Date";
  const initialValue = "2023-01-01";

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  it("renders the label and input correctly", () => {
    render(
      <DatePicker label={label} value={initialValue} onChange={mockOnChange} />
    );

    // Check if the label is rendered correctly
    expect(screen.getByLabelText(label)).toBeInTheDocument();

    // Check if the input has the correct initial value
    const input = screen.getByLabelText(label);
    expect(input).toHaveValue(initialValue);
  });

  it("calls onChange when the date is changed", () => {
    render(
      <DatePicker label={label} value={initialValue} onChange={mockOnChange} />
    );

    // Simulate changing the date
    const input = screen.getByLabelText(label);
    fireEvent.change(input, { target: { value: "2023-01-02" } });

    // Check if the onChange callback is called with the new value
    expect(mockOnChange).toHaveBeenCalledWith("2023-01-02");
  });
});

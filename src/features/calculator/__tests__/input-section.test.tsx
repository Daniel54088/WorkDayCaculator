import { render, screen, fireEvent } from "@testing-library/react";
import InputSection from "../components/input-section";
import { Tab } from "@/types/holidays";

describe("InputSection Component", () => {
  const mockOnTabChange = vi.fn();
  const mockOnStartDateChange = vi.fn();
  const mockOnEndDateChange = vi.fn();
  const mockOnCalculate = vi.fn();

  const defaultProps = {
    activeTab: "weekdays" as Tab,
    tabs: [
      { label: "Weekdays", value: "weekdays" as Tab },
      { label: "Business Days", value: "businessDays" as Tab },
    ],
    startDate: "",
    endDate: "",
    error: null,
    onTabChange: mockOnTabChange,
    onStartDateChange: mockOnStartDateChange,
    onEndDateChange: mockOnEndDateChange,
    onCalculate: mockOnCalculate,
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders the tabs and switches active tab correctly", () => {
    render(<InputSection {...defaultProps} />);

    const weekdaysTab = screen.getByText("Weekdays");
    const businessDaysTab = screen.getByText("Business Days");

    // Verify both tabs are rendered
    expect(weekdaysTab).toBeInTheDocument();
    expect(businessDaysTab).toBeInTheDocument();

    // Simulate tab switching
    fireEvent.click(businessDaysTab);
    expect(mockOnTabChange).toHaveBeenCalledWith("businessDays");

    fireEvent.click(weekdaysTab);
    expect(mockOnTabChange).toHaveBeenCalledWith("weekdays");
  });

  it("renders DatePickers and calls onChange callbacks", () => {
    render(<InputSection {...defaultProps} />);

    const startDatePicker = screen.getByLabelText("Start Date");
    const endDatePicker = screen.getByLabelText("End Date");

    // Verify DatePickers are rendered
    expect(startDatePicker).toBeInTheDocument();
    expect(endDatePicker).toBeInTheDocument();

    // Simulate date change
    fireEvent.change(startDatePicker, { target: { value: "2023-01-01" } });
    expect(mockOnStartDateChange).toHaveBeenCalledWith("2023-01-01");

    fireEvent.change(endDatePicker, { target: { value: "2023-01-02" } });
    expect(mockOnEndDateChange).toHaveBeenCalledWith("2023-01-02");
  });

  it("shows error message when error is provided", () => {
    render(<InputSection {...defaultProps} error="An error occurred" />);

    // Check if the error message is displayed
    expect(screen.getByText("An error occurred")).toBeInTheDocument();
  });

  it("calls onCalculate when button is clicked and both dates are filled", () => {
    render(
      <InputSection
        {...defaultProps}
        startDate="2023-01-01"
        endDate="2023-01-02"
      />
    );

    const calculateButton = screen.getByRole("button", {
      name: /calculate the days/i,
    });

    // Verify button is enabled when both dates are filled
    expect(calculateButton).not.toBeDisabled();

    // Simulate button click
    fireEvent.click(calculateButton);
    expect(mockOnCalculate).toHaveBeenCalled();
  });

  it("disables the calculate button when dates are missing", () => {
    render(<InputSection {...defaultProps} />);

    const calculateButton = screen.getByRole("button", {
      name: /calculate the days/i,
    });

    // Verify button is disabled when dates are missing
    expect(calculateButton).toBeDisabled();
  });
});

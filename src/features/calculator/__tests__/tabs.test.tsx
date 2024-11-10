import { render, screen, fireEvent } from "@testing-library/react";
import Tabs from "../components/tabs";
import { WEEKDAYS_TAB, BUSINESS_DAYS_TAB } from "@/types/holidays";

describe("Tabs Component", () => {
  const mockOnTabChange = vi.fn();

  const tabs = [
    { label: "Weekdays", value: WEEKDAYS_TAB },
    { label: "Business Days", value: BUSINESS_DAYS_TAB },
  ];

  beforeEach(() => {
    mockOnTabChange.mockClear();
  });

  it("renders all tabs correctly", () => {
    render(
      <Tabs
        tabs={tabs}
        activeTab={WEEKDAYS_TAB}
        onTabChange={mockOnTabChange}
      />
    );

    tabs.forEach((tab) => {
      expect(screen.getByText(tab.label)).toBeInTheDocument();
    });
  });

  it("applies active styling to the selected tab", () => {
    render(
      <Tabs
        tabs={tabs}
        activeTab={WEEKDAYS_TAB}
        onTabChange={mockOnTabChange}
      />
    );

    const activeTab = screen.getByText("Weekdays");
    expect(activeTab).toHaveClass("bg-blue-700 text-white");

    const inactiveTab = screen.getByText("Business Days");
    expect(inactiveTab).toHaveClass("bg-gray-200");
  });

  it("calls onTabChange with the correct value when a tab is clicked", () => {
    render(
      <Tabs
        tabs={tabs}
        activeTab={WEEKDAYS_TAB}
        onTabChange={mockOnTabChange}
      />
    );

    // Simulate clicking the "Business Days" tab
    const businessDaysTab = screen.getByText("Business Days");
    fireEvent.click(businessDaysTab);

    // Ensure onTabChange is called with the correct value
    expect(mockOnTabChange).toHaveBeenCalledWith(BUSINESS_DAYS_TAB);
  });
});

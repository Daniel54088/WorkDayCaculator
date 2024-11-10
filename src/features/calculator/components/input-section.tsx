import Tabs from "./tabs";
import DatePicker from "./date-picker";
import ErrorMessage from "@/components/errors/error-message";
import { Button } from "@/components/ui/button";
import { Tab } from "@/types/holidays";

interface InputSectionProps {
  activeTab: Tab;
  tabs: {
    label: string;
    value: Tab;
  }[];
  startDate: string;
  endDate: string;
  error: string | null;
  onTabChange: (tab: Tab) => void;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
  onCalculate: () => void;
}

export default function InputSection({
  activeTab,
  tabs,
  startDate,
  endDate,
  error,
  onTabChange,
  onStartDateChange,
  onEndDateChange,
  onCalculate,
}: InputSectionProps) {
  return (
    <section className="bg-gray-100 p-6 rounded-lg shadow-md w-full max-w-md lg:max-w-sm mb-8 lg:mb-0">
      <h2 className="text-lg font-semibold mb-4">Work Days Calculator</h2>

      <Tabs tabs={tabs} activeTab={activeTab} onTabChange={onTabChange} />

      <DatePicker
        label="Start Date"
        value={startDate}
        onChange={onStartDateChange}
      />
      <DatePicker label="End Date" value={endDate} onChange={onEndDateChange} />

      {error && <ErrorMessage message={error} />}

      <Button
        onClick={onCalculate}
        variant="default"
        size="lg"
        className="w-full bg-blue-700 text-white p-3 rounded-lg font-semibold hover:bg-blue-800"
        disabled={!startDate || !endDate}
        aria-label="Calculate the days"
      >
        Calculate the days
      </Button>
    </section>
  );
}

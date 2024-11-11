import { useAppSelector, useAppDispatch } from "@/hooks/react-redux";
import InputSection from "./components/input-section";
import ResultSection from "./components/result-section";
import {
  setActiveTab,
  setStartDate,
  setEndDate,
  calculateResult,
  resetCalculator,
  setError,
} from "@/features/calculator/calculator-slice";
import { Tab } from "@/types/holidays";
export default function Calculator() {
  const dispatch = useAppDispatch();
  const { activeTab, startDate, endDate, result, error } = useAppSelector(
    (state) => state.calculator
  );

  const handleCalculate = () => {
    dispatch(setError(null));
    dispatch(calculateResult());
  };

  const handleReset = () => dispatch(resetCalculator());

  const handleTabChange = (tab: Tab) => dispatch(setActiveTab(tab));
  const handleStartDateChange = (date: string) => dispatch(setStartDate(date));
  const handleEndDateChange = (date: string) => dispatch(setEndDate(date));

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col lg:flex-row sm:items-start sm:justify-center md:items-center md:justify-start lg:items-start lg:justify-center px-4 py-8 lg:space-x-8">
      <InputSection
        activeTab={activeTab}
        tabs={[
          { label: "Weekdays", value: "weekdays" },
          { label: "Business Days", value: "businessDays" },
        ]}
        startDate={startDate}
        endDate={endDate}
        error={error}
        onTabChange={handleTabChange}
        onStartDateChange={handleStartDateChange}
        onEndDateChange={handleEndDateChange}
        onCalculate={handleCalculate}
      />
      <ResultSection result={result} onReset={handleReset} />
    </div>
  );
}

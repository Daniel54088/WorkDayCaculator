import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BusinessDayCounter } from "@/utils/business-day-counter";
import { HolidayRule, WEEKDAYS_TAB, Tab } from "@/types/holidays";
import { dateSchema } from "@/features/calculator/validation-schema";

interface CalculatorState {
  activeTab: Tab;
  startDate: string;
  endDate: string;
  result: number | null;
  error: string | null;
}

const initialState: CalculatorState = {
  activeTab: WEEKDAYS_TAB,
  startDate: "",
  endDate: "",
  result: null,
  error: null,
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    setActiveTab(state, action: PayloadAction<Tab>) {
      state.activeTab = action.payload;
    },
    setStartDate(state, action: PayloadAction<string>) {
      state.startDate = action.payload;
    },
    setEndDate(state, action: PayloadAction<string>) {
      state.endDate = action.payload;
    },
    calculateResult(state) {
      const { activeTab, startDate, endDate } = state;

      // const startDate = { key: "test" };  uncomment it  to test error

      const validation = dateSchema.safeParse({ startDate, endDate });
      if (!validation.success) {
        state.result = null;
        state.error = validation.error.issues[0].message;
        return;
      }

      state.error = null; // Clear any previous errors

      const start = new Date(startDate);
      const end = new Date(endDate);

      if (activeTab === WEEKDAYS_TAB) {
        state.result = BusinessDayCounter.weekdaysBetweenTwoDates(start, end);
      } else {
        const publicHolidayRules: HolidayRule[] = [
          { type: "fixed", month: 11, day: 25 }, // Example: Christmas on 25th December
          { type: "fixed", month: 11, day: 26 }, // Example: Boxing Day on 26th December
          {
            type: "floating",
            month: 0,
            day: 1,
          }, // New Year's Day on 1st January
          { type: "occurrence", month: 5, weekday: 1, occurrence: 2 }, // Queen's Birthday on the second Monday in June
        ];

        state.result = BusinessDayCounter.businessDaysBetweenTwoDates(
          start,
          end,
          publicHolidayRules
        );
      }
    },
    resetCalculator(state) {
      state.activeTab = initialState.activeTab;
      state.startDate = initialState.startDate;
      state.endDate = initialState.endDate;
      state.result = initialState.result;
      state.error = initialState.error;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
});

export const {
  setActiveTab,
  setStartDate,
  setEndDate,
  calculateResult,
  resetCalculator,
  setError,
} = calculatorSlice.actions;

export default calculatorSlice.reducer;

export const FIXED = "fixed" as const;
export const FLOATING = "floating" as const;
export const OCCURRENCE = "occurrence" as const;
export const WEEKDAYS_TAB = "weekdays" as const;
export const BUSINESS_DAYS_TAB = "businessDays" as const;

export type Tab = typeof WEEKDAYS_TAB | typeof BUSINESS_DAYS_TAB;

export type FixedDateHoliday = {
  type: typeof FIXED;
  month: number; // 0 for January, 11 for December
  day: number; // Day of the month
};

export type FloatingHoliday = {
  type: typeof FLOATING;
  month: number;
  day: number;
};

export type OccurrenceHoliday = {
  type: typeof OCCURRENCE;
  month: number;
  weekday: number; // 0 for Sunday, 1 for Monday, ..., 6 for Saturday
  occurrence: number; // 1 for first, 2 for second, etc.
};

export type HolidayRule =
  | FixedDateHoliday
  | FloatingHoliday
  | OccurrenceHoliday;

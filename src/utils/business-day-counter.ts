import { FIXED, FLOATING, OCCURRENCE, HolidayRule } from "@/types/holidays";

export class BusinessDayCounter {
  static weekdaysBetweenTwoDates(firstDate: Date, secondDate: Date): number {
    if (secondDate <= firstDate) return 0;

    const start = new Date(firstDate);
    const end = new Date(secondDate);

    start.setDate(start.getDate() + 1); // Exclude the start date to start from the next day

    const totalDays = Math.floor(
      (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
    );

    const fullWeeks = Math.floor(totalDays / 7);
    const remainingDays = totalDays % 7;

    // Full weeks has 5 weekdays each
    let weekdays = fullWeeks * 5;

    // Check remaining days
    for (let i = 0; i < remainingDays; i++) {
      const dayOfWeek = (start.getDay() + i) % 7; // 0 for Sunday, 6 for Saturday
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        //  Sunday and Saturday don't count
        weekdays++;
      }
    }

    return weekdays;
  }

  static businessDaysBetweenTwoDates(
    firstDate: Date,
    secondDate: Date,
    holidayRules: HolidayRule[]
  ): number {
    if (secondDate <= firstDate) return 0;

    const holidays = this.calculateHolidayDates(
      firstDate,
      secondDate,
      holidayRules
    );
    const holidaySet = new Set(holidays.map((date) => date.toDateString()));

    // Get initial weekday count using the helper function
    let businessDays = this.weekdaysBetweenTwoDates(firstDate, secondDate);

    // Start from the day after the first date
    const currentDate = new Date(firstDate);
    currentDate.setDate(currentDate.getDate() + 1);

    // Loop through the date range to exclude any holidays from business days
    while (currentDate < secondDate) {
      const isHoliday = holidaySet.has(currentDate.toDateString());

      if (isHoliday) {
        businessDays--; // Subtract holiday that falls on a weekday
      }

      currentDate.setDate(currentDate.getDate() + 1);
    }

    return businessDays;
  }

  private static calculateHolidayDates(
    startDate: Date,
    endDate: Date,
    holidayRules: HolidayRule[]
  ): Date[] {
    const holidays: Date[] = [];

    // Calculate all years within the date range as a set for uniqueness
    const startYear = startDate.getFullYear();
    const endYear = endDate.getFullYear();
    const yearsInRange = new Set(
      Array.from({ length: endYear - startYear + 1 }, (_, i) => startYear + i)
    );

    holidayRules.forEach((rule) => {
      yearsInRange.forEach((year) => {
        let holidayDate: Date | null = null;

        if (rule.type === FIXED) {
          holidayDate = new Date(year, rule.month, rule.day);
        } else if (rule.type === FLOATING) {
          holidayDate = new Date(year, rule.month, rule.day);
          if (holidayDate.getDay() === 0 || holidayDate.getDay() === 6) {
            // Move to the next Monday if the holiday falls on a weekend
            holidayDate.setDate(
              holidayDate.getDate() + (holidayDate.getDay() === 6 ? 2 : 1) //
            );
          }
        } else if (rule.type === OCCURRENCE) {
          holidayDate = this.getOccurrenceDate(
            year,
            rule.month,
            rule.weekday,
            rule.occurrence
          );
        }

        // Security check
        if (holidayDate && holidayDate >= startDate && holidayDate <= endDate) {
          holidays.push(holidayDate);
        }
      });
    });

    return holidays;
  }

  private static getOccurrenceDate(
    year: number,
    month: number,
    weekday: number,
    occurrence: number
  ): Date {
    const firstDayOfMonth = new Date(year, month, 1);
    const day = firstDayOfMonth.getDay(); // Find the day of the week for the first day of the month
    const dayOffset = (weekday - day + 7) % 7; // Find first day of the week(Sun-Sat depends on weekday param) and offset to it
    const date = 1 + dayOffset + (occurrence - 1) * 7; // Calculate the date of the occurrence
    return new Date(year, month, date);
  }
}

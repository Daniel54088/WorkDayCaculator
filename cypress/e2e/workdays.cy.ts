// cypress/e2e/workdays.cy.ts

describe("Work Days Calculator Flow", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  const setDatesAndCalculate = (startDate: string, endDate: string) => {
    cy.get('[aria-label="start-date-input"]').clear().type(startDate);
    cy.get('[aria-label="end-date-input"]').clear().type(endDate);
    cy.get("button").contains("Calculate the days").click();
  };

  const checkResult = (expectedDays: string) => {
    cy.get('[aria-label="result-days"]')
      .contains(expectedDays)
      .should("be.visible");
  };

  it("should load the Work Days Calculator page with default settings", () => {
    cy.contains("Work Days Calculator").should("be.visible");
    cy.contains("Weekdays").should("have.class", "bg-blue-700 text-white");
    cy.contains("Business Days").should("have.class", "bg-gray-200");
  });

  context("Weekdays Calculations", () => {
    beforeEach(() => {
      cy.contains("Weekdays").click();
    });

    const weekdayTests = [
      { start: "2023-01-01", end: "2023-01-10", expected: "6 days." },
      { start: "2013-10-07", end: "2013-10-09", expected: "1 days." },
      { start: "2013-10-05", end: "2013-10-14", expected: "5 days." },
      { start: "2013-10-07", end: "2014-01-01", expected: "61 days." },
    ];

    weekdayTests.forEach(({ start, end, expected }) => {
      it(`calculates weekdays from ${start} to ${end}`, () => {
        setDatesAndCalculate(start, end);
        checkResult(expected);
      });
    });
  });

  context("Business Days Calculations", () => {
    beforeEach(() => {
      cy.contains("Business Days").click();
    });

    const businessDayTests = [
      { start: "2023-12-20", end: "2024-01-10", expected: "11 days." },
      { start: "2013-12-20", end: "2014-01-10", expected: "1 days." },
      { start: "2013-12-24", end: "2013-12-27", expected: "0 days." },
      { start: "2013-10-07", end: "2014-01-01", expected: "59 days." },
    ];

    businessDayTests.forEach(({ start, end, expected }) => {
      it(`calculates business days from ${start} to ${end}`, () => {
        setDatesAndCalculate(start, end);
        checkResult(expected);
      });
    });
  });
});

// cypress/e2e/questionnaire.cy.ts

describe("Questionnaire Flow", () => {
  beforeEach(() => {
    cy.visit("/questionnaire");
  });

  it("should load the first question on the Questionnaire page", () => {
    // Check that the question header is visible
    cy.get('[data-testid="question-header"]')
      .should("be.visible")
      .and("not.be.empty");
    cy.get("button").contains("ok");
    cy.get("button").should("be.disabled"); // Check if button is initially disabled
  });

  it("should select the first answer repeatedly and proceed until reaching the Result page", () => {
    const selectAndProceed = () => {
      cy.get('[data-testid="answer-option"]').first().click();
      cy.get("button").should("not.be.disabled").contains("ok").click();

      cy.url().then((currentUrl) => {
        if (!currentUrl.includes("/result")) {
          // If not on the result page, call the function again to continue
          selectAndProceed();
        }
      });
    };

    selectAndProceed();

    // Once on the result page, confirm by checking for specific content
    cy.url().should("include", "/result");
    cy.contains("Your perfect tree match").should("be.visible");
  });
});

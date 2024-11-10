// cypress/e2e/navigation.cy.ts

describe("Navigation", () => {
  it('should load the Welcome page at the root path "/"', () => {
    cy.visit("/");
    cy.contains("Find the Perfect Tree for Your Garden").should("be.visible");
  });

  it("should navigate to the Questionnaire page", () => {
    cy.visit("/questionnaire");
    cy.url().should("include", "/questionnaire");
    // Check that the question header is visible
    cy.get('[data-testid="question-header"]')
      .should("be.visible")
      .and("not.be.empty");

    // Check that at least one answer option (radio button) is visible
    cy.get('[data-testid="answer-option"]').should(
      "have.length.greaterThan",
      0
    );
  });

  it("should navigate to the Result page", () => {
    cy.visit("/result");
    cy.url().should("include", "/result");
    cy.contains("Your perfect tree match").should("be.visible"); // Adjust as needed
  });

  it("should show 404 page for unknown routes", () => {
    cy.visit("/unknown-route", { failOnStatusCode: false });
    cy.contains("Not Found").should("be.visible");
  });
});

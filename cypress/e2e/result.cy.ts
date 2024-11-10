// cypress/e2e/result.cy.ts

describe("Result Page", () => {
  beforeEach(() => {
    // Mock data in localStorage to simulate a match
    localStorage.setItem(
      "match",
      JSON.stringify({ name: "Oak", description: "Strong and resilient." })
    );
    cy.visit("/result");
  });

  it("should display the matched tree on the Result page", () => {
    cy.contains("Your perfect tree match is - Oak").should("be.visible");
    cy.contains("Strong and resilient.").should("be.visible");
  });

  it("should restart the quiz and return to the Welcome page", () => {
    cy.contains("Restart quiz").click();
    cy.url().should("eq", `${Cypress.config().baseUrl}/`);
    cy.contains("Find the Perfect Tree for Your Garden").should("be.visible");
  });
});

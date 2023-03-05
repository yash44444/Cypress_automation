/// <reference types="cypress" />

// cyress auto handles all the pop ups

describe("handle alerts", () => {
  it("handle the js alert manually", () => {
    if (Cypress.isBrowser("chrome")) {
      cy.on("window:alert", (str) => {
        expect(str).to.equal("I am an alert box");
      });
    }
  });

  it("handle the js alert manually", () => {
    if (Cypress.isBrowser("edge")) {
      cy.on("window:confirm", (str) => {
        return true;
      });
    }
    cy.get("#confirm-alert-text").contains("You pressed OK!");
  });
});

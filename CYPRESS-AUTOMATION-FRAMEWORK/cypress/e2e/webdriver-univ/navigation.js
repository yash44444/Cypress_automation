/// <reference types="cypress"/>

describe("browser navigation", () => {
  it("should be able to navigate forward and backward", () => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
    cy.url().should("include", "Contact-Us");
    cy.go("back");
    cy.reload();
    cy.reload(true); // without using cache
    cy.go("forward");
  });
});

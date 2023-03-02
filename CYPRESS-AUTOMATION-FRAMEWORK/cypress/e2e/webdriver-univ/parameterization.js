/// <reference types="Cypress" />

describe("Parameterize the contact us using Fixtures", () => {
  before(function () {
    cy.fixture("data").then(function (data) {
      globalThis.data = data;
    });
  });

  it("should be able to submit a successful submission via contact us form", () => {
    cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html");
    cy.get('[name="first_name"]').type("data.firstName");
    cy.get('[name="last_name"]').type("data.lastName");
    cy.get('[name="email"]').type("data.email");
    cy.get('[name="message"]').type("data.comments");
    cy.get('[type="submit"]').click();

    // Assertion
    cy.get("h1").should("have.text", "Thank You for your Message!");
  });
});

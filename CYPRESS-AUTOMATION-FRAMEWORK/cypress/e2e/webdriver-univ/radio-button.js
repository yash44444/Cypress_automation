/// <reference types="Cypress" />

describe("select radio button", () => {
  it("should be able to select values from the dropdown", () => {
    cy.visit(
      "http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
    );
    cy.get("#radio-buttons").find("[type='radio']").eq(1).check();
  });

  it("enable disable radio button", () => {
    cy.visit(
      "http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
    );
    cy.get("[value='lettuce']").should("not.be.checked");
    cy.get("[value='cabbage']").should("not.be.enabled");
  });

  it.only("should be able to select multiple check boxes", () => {
    cy.visit(
      "http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
    );
    cy.get("#checkboxes").find("[type='checkbox']").first().check();
    cy.get("[value='option-1']").check().should("be.checked");
    cy.get("[type='checkbox']").check([
      "option-1",
      "option-2",
      "option-3",
      "option-4",
    ]);
  });
});

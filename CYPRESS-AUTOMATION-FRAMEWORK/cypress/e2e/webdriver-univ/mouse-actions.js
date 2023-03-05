/// <reference types="Cypress" />

describe("interact with dropdown list", () => {
  it("should be able to select values from the dropdown", () => {
    cy.visit("http://webdriveruniversity.com/Actions/index.html");
    cy.get("#dropdowm-menu-1").select("c#");
    cy.get("#draggable").trigger("mousedown", { which: 1 });
    cy.get("#droppable")
      .trigger("mouseover")
      .trigger("mouseup", { force: true });
    cy.get("#double-click").dblclick();
  });
});

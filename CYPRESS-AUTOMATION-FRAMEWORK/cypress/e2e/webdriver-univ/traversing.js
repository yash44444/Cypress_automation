/// <reference types="Cypress" />

describe("interact with dropdown list", () => {
  beforeEach(() => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
  });

  it("get the children of DOM element", () => {
    cy.get('.traversal-breadcrumb').children('.active').should('contain','Contact Us')
  });

  it.only("get the closest ancestor", () => {
    cy.get('.traversal-badge').closest('ul').should('have.class','list-group')
  });

  it("filter a selector", () => {
    cy.get('.btn-group-toggle > *').filter('active').should('contain','Button-1')
  });

  it("find() to get DOM elements of given selector", () => {
    cy.get('.traversal-pagination').find('li').find('a').should('have.length','7')
  });

  it("get the children of DOM elements", () => {
    cy.get('.traversal-breadcrumb').children('.active').should('contain','Contact Us')
  });

  it("get the children of DOM elements", () => {
    cy.get('.traversal-breadcrumb').children('.active').should('contain','Contact Us')
  });

  it("get the children of DOM elements", () => {
    cy.get('.traversal-breadcrumb').children('.active').should('contain','Contact Us')
  });
});

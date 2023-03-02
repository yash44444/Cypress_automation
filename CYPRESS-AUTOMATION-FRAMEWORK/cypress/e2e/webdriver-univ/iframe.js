/// <reference types="cypress" />

describe("interact with iframe", ()=>{
    it("handle the iframe", ()=> {
    cy.get('#frame').then(($iframe) => {
    const $body = $iframe.contents().find('body');
    cy.wrap($body).find('#my-button').click();
    })
  })
})
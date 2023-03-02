/// <reference types="Cypress" />


describe("Inspect automation test store items", () => {
    it.only("clcik on the first item in the header",() => {
        cy.visit("https://automationteststore.com/")
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click()          
    });

    it.only("clcik on the first item in the header",() => {
        cy.visit("https://automationteststore.com/")
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click()          
    });

     

})
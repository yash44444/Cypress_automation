/// <reference types="Cypress" />

const { should } = require("chai");


describe("test contact-us page via automaton store", ()=>{
    it("should be able to submit a successful submission via contact us form",()=> {
        cy.visit("https://automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
        cy.get(".fixed_wrapper .prdocutname").eq(0).invoke('text').as('productpersonalName')
        cy.get('@productpersonalName').its('length').should('be.gt',5)
        cy.get('@productpersonalName').should('include','Seaweed Conditioner')
           
    });

    it("validate product fom cart",()=> {
        cy.visit("https://automationteststore.com/")
        cy.get('.thumbnail').as('productThumbnail')
        cy.get('@productThumbnail').should('have.length',16)
        cy.get('@productThumbnail').find('.productcart').invoke('attr','title').should('include','Add to Cart')

           
    });

})
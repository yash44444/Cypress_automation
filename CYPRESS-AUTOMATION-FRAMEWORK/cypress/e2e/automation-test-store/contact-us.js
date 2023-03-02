/// <reference types="Cypress" />


describe("test contact-us page via automaton store", ()=>{
    it("should be able to submit a successful submission via contact us form",()=> {
        cy.visit("https://automationteststore.com/")
        cy.get("a[href$='contact']").click() 
        cy.get('#ContactUsFrm_first_name').type("yashu")
        cy.get('#ContactUsFrm_email').type("yash01verma@gmail.com")
        cy.get('#ContactUsFrm_enquiry').type("welcome to cypress")
        cy.get("button[title='Submit']").click()   
        cy.get('.mb40 > :nth-child(3)').should('have.text','Your enquiry has been successfully sent to the store owner!')

           
    });

})
/// <reference types="Cypress" />


describe("test contact-us page via webdriver university", ()=> {
    before(function() {
        cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html")

    })

    it("should be able to submit a successful submission via contact us form",()=> {       
        // Assertions
        cy.document().should('have.property','charset').and('eq','UTF-8')
        cy.title().should('include','WebDriver')
        cy.url().should('include','Contact-Us/contactus.html')

        //cy.get('#contact-us').click({force:true}) 
        cy.get('[name="first_name"]').type("yashu")
        cy.get('[name="last_name"]').type("verma")
        cy.get('[name="email"]').type("yash01verma@gmail.com")
        cy.get('[name="message"]').type("welcome to cypress")
        cy.get('[type="submit"]').click()   

        // Assertion
        cy.get('h1').should('have.text','Thank You for your Message!')  
    });

    it("should not be able to submit a successful submission via contact us form",()=> {
        cy.get('[type="submit"]').click()

        // Assertion
        cy.get('body').contains('Error: all fields are required')

    })
})
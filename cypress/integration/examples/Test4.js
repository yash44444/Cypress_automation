// pop up .. cypress will itself handle the pop ups. it will click ok on pop up by itself.
// cypress provdes events like window:alert to capture pop ups

describe('My second Cypress Test', function() {
    it('Visits the select class static dropdown and check the menu items', function() {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get("#alertbtn").click()
    cy.get("#confirmbtn").click()

    cy.on("windown:alert", (str) => 
    {
        expect(str).to.be.equal("Hello , share this practice page and share your knowledge")
    })

   cy.get("#opentab").invoke("removeAttr","target").click()
   
    });  

})
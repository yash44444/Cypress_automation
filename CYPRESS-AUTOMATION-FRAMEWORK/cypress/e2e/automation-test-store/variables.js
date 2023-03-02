/// <reference types="Cypress" />


describe("test different variables", ()=>{
    it("should be able to submit a successful submission via contact us form",()=> {
        cy.visit("https://automationteststore.com/")
        const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup")
        // const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare")
        // makeupLink.click()
        // skincareLink.click()

        cy.get("h1 .maintext").then(($headerText)=> {
            const headerText = $headerText.text()
            cy.log("Found header text")
        })


        


           
    });

})
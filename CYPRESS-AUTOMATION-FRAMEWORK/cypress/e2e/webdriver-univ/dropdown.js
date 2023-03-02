/// <reference types="Cypress" />


describe("interact with dropdown list", ()=>{
    it("should be able to select values from the dropdown",()=> {
        cy.visit("http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
        cy.get('#dropdowm-menu-1').select('c#')
        cy.get('#dropdowm-menu-2').select('testng').should('have.value','testng')
        cy.get('#dropdowm-menu-2').select('Maven').should('have.value','maven')
        cy.get('#dropdowm-menu-3').select('jquery')


    })

       
    });
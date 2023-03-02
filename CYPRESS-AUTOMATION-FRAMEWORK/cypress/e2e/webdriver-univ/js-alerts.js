/// <reference types="cypress" />

describe("handle alerts", ()=>{
    it("handle the js alert manually", ()=> {
        cy.on('window:alert',(str)=>{
            expect(str).to.equal('I am an alert box')
        })
    })

    it("handle the js alert manually", ()=> {
        cy.on('window:confirm',(str)=>{
            return true;
        })
        cy.get("#confirm-alert-text").contains("You pressed OK!")
    })
})
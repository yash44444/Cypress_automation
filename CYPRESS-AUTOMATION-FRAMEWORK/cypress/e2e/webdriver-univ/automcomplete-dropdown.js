/// <reference types="Cypress" />


describe("interact with dropdown list", ()=>{
    it("should be able to select values from the dropdown",()=> {
        cy.visit("http://webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html")
        cy.get('#myInput').type('a')
        cy.get('#myInputautocomplete-list > *').each(($el,index,$list) => {
            const prodName = $el.text()
            const prodToSelect = 'Avacado'

            if(prodName === prodToSelect){
                $el.trigger("click")
                cy.get('#submit-button').click()
                cy.url().should('include',prodToSelect)

            }
        })
      

    })

       
    });
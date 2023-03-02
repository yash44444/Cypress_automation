/// <reference types="Cypress" />


describe("test contact-us page via automaton store", ()=>{
    it("should be able to submit a successful submission via contact us form",()=> {
        cy.visit("https://automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()

        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            cy.log("Index: "+ index + ":" + $el.text())
            if($el.text().includes("straight Shampoo")){
                cy.wrap($el).click()
            }
          }); 

           
    });

})


describe('My First Cypress Test', () => {
    it('Visits the ToolsQA Demo Page and check the menu items', () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword",{timeout: 5000}).type("ca");
    cy.get("button[type='submit']");
    cy.get(".products").find(".product").eq(0).contains("ADD TO CART").click()

    cy.get(".products").find(".product").each(($el, index, $list)=>{
       const vegName =  $el.find("h4.product-name").text()
       if(vegName.includes("Capsicum")){
        cy.wrap($el).find("button").click()
       }

    });  

    cy.get(".brand").should("have.text","GREENKART")

    cy.get("img[alt='Cart']").click()
    cy.contains("PROCEED TO CHECKOUT").click()
    cy.get(':nth-child(14)').click()








})
})
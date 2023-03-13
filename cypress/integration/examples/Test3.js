// dropdown

describe('My second Cypress Test', function() {
    it('Visits the select class static dropdown and check the menu items', function() {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get("#dropdown-class-example").select("Option2").should("have.value","option2")
    });  

    // it('Visits the dynamic dropdown and check the menu items', function() {
    //     cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    //     cy.get(".inputs.ui-autocomplete-input").type("ind")
    //     cy.get(".ui-menu-item").each(($e1,index,$list) => {
    //         if($e1.text()==="India"){
    //             cy.wrap($e1).click()
            // }})});  
})

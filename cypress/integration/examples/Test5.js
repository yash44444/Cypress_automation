
describe("child tab", function() {
    it("page navigation", function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("#opentab").invoke("removeAttr","target").click()
        cy.url().should("include","academy")
        cy.go('back')       
        
        });  

    it("mouse hovering", function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("div.mouse-hover-content").invoke("show")
        cy.contains("Top").click({force:true})
        cy.url().should("include","top")
             
        });  

    })

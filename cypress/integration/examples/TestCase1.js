import HomePage from '../PageObjects/HomePage'
import ShoppingPage from '../PageObjects/ShoppingPage'
import CheckoutPage from '../PageObjects/CheckoutPage'
import DeliveryPage from '../PageObjects/DeliveryPage'
import { includes } from 'cypress/types/lodash'

describe('Automate angular application', function() {

    before(function() {
        cy.fixture("example").then(function(data) {
            this.data=data
        })
    })

    it('test home page', function() {
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        // cy.get("input[name='name']:nth-child(2)").type(this.data.name)
        // cy.get("input[name='email']").type(this.data.email)
        // cy.get("input[type='password']").type(this.data.password)
        // cy.get("#exampleCheck1").check()
        // cy.get("#exampleFormControlSelect1").select(this.data.gender)
        // cy.get("#inlineRadio2").check()

        const homepage = new HomePage()
        homepage.getName().type(this.data.name)
        homepage.getEmail().type(this.data.email)
        homepage.getPassword().type(this.data.password)
        homepage.getIceCream().check()
        homepage.getGender().select(this.data.gender)
        homepage.getEmploymentStatus().check()

        // parameterization is done using fixture folder provided by cypress.

        //cy.selectProduct("Blackberry")

        cy.get(":nth-child(2) > .nav-link").click()

        this.data.productName.forEach(function(element){
            cy.selectProduct(element)
        })

       // cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()

         const shoppingPage = new ShoppingPage()
         shoppingPage.checkoutFromShopping.click()

         const checkoutPage = new CheckoutPage()
         checkoutPage.checkoutToDeliveryPage.click()

         const deliveryPage = new DeliveryPage()
         deliveryPage.country.type("Ind")
         deliveryPage.suggestion.click()
         deliveryPage.checkbox.click({force: true})
         deliveryPage.purchase.click()

         cy.get(".alert.alert").then(function(element) {
            const actualText = element.text()
            expect(actualText.includes("Success")).to.be.true     

         })

    })
})
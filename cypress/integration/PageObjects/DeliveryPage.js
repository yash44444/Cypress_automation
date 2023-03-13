class DeliveryPage {

    get country(){
        return cy.get('#country')
    }

    get suggestion() {
        return cy.get('.suggestions > :nth-child(1) > li > a')
    }

    get checkbox() {
        return cy.get("#checkbox2")
    }

    get purchase() {
        return cy.get('.ng-untouched > .btn')
    }

}

export default DeliveryPage
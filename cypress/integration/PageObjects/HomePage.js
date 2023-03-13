class HomePage {

    getName() {
    return cy.get("input[name='name']:nth-child(2)")
    }

    getEmail() {
    return cy.get("input[name='email']")
    }

    getPassword(){
    return cy.get("input[type='password']")
    }

    getIceCream(){
    return cy.get("#exampleCheck1")
    }

    getGender(){
    return cy.get("#exampleFormControlSelect1")
    }

    getEmploymentStatus() {
    return cy.get("#inlineRadio2")
    }

}

export default HomePage
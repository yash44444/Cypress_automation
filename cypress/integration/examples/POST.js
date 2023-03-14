/// <reference types = "Cypress" />

// require is a built-in function used in JavaScript to import functionality from other files or external libraries.
// const dataset = require('cypress/fixtures/createData')

// describe, it are coming from mocha. expect is coming from chai
describe("API test suite", () => {

    let randomString = ""
    let testEmail = ""

    let access_token = "808ee546501c9e7e5e70017a7ac01286e2e44a5517856056318cfa77ef5d2951"

    it("post call", () => {

        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 10; i++) 
        randomString += characters.charAt(Math.floor(Math.random() * characters.length));
        testEmail = randomString + "@gmail.com"

        // .then() is a call back function to store the response
        cy.fixture('createData').then((payload)=>{    // cy.fixture is a way to read data file from fixture folder
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v1/users',
            headers: {
                'Authorization': 'Bearer ' + access_token
            },
            body: {
                "name": payload.name,
                "gender": payload.gender,
                "email": testEmail,
                "status": "active"
            }
        }).then((res) => {
            expect(res.status).to.eql(201)
            expect(res.body.data.name).to.eql('yashu')
            expect(res.body.data).has.property('gender',payload.gender)

        })

    })

})
})

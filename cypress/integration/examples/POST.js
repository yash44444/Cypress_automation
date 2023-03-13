/// <reference types = "Cypress"/>

// describe, it are coming from mocha. expect is coming from chai
describe("API test suite", () => {

    let access_token = "808ee546501c9e7e5e70017a7ac01286e2e44a5517856056318cfa77ef5d2951"

    it("post call", () => {
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v1/users',
            headers: {
                'Authorization': 'Bearer ' + access_token
            },
            body: {
                "name": "yashu",
                "gender": "male",
                "email": "avcc1@gmail.com",
                "status": "active"
            }
        }).then((res) => {
            expect(res.status).to.eql(201)
            expect(res.body.data.name).to.eql('yashu')
            expect(res.body.data).has.property('gender', 'male')

        })

    })

})


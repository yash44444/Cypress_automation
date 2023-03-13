
describe('API tests', () => {

it('GET', () => {
    cy.request({
        'method': 'GET', 
        'url': 'https://reqres.in/api/users?page=2',
        headers: 
        {
            'Content-Type': 'application/json'
        },
        auth: 
        {
            'username': 'user1',
            'password': 'pass'
        }

})
    .then((response) => {
        expect(response.status).to.be.eql(200)
        expect(response.body).not.to.be.null

    })
})

    it('POST', () => (
        cy.request({
            'method': 'POST', 
            'url': 'https://reqres.in/api/users',
            'body': 
            {
                "name": "morpheus",
                "job": "leader"
            },
            headers: 
            {
                'Content-Type': 'application/json'
            }
    })
        .then((response) => {
            expect(response.status).to.be.eql(201)
            expect(response.body).not.to.be.null
    
        })
    ))

    it('PUT', () => (
        cy.request({
            'method': 'PUT', 
            'url': 'https://reqres.in/api/users/2',
            'body': 
            {
                "name": "morpheus",
                "job": "captain"
            },
            headers: 
            {
                'Content-Type': 'application/json'
            }
    })
        .then((response) => {
            expect(response.status).to.be.eql(200 )
            expect(response.body).not.to.be.null
    
        })
    ))

    })



describe('my test suite', function() {
   

    it('my test case', function() {

        cy.visit("https://rahulshettyacademy.com/angularAppdemo/")

        cy.intercept(
            {
                method: 'GET',
                url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
            },
            {
                statusCode: 200,
                body: 
                [
                    {
                        'book_name': 'RestAssured with java', 
                        'isbn': 'RSU',
                        'aisle': '2301'
                    }
                ]
            }).as('bookList')
            cy.get("button[class='btn btn-primary']").click()
            cy.wait('@bookList')
            cy.get('p').should('have.text','Oops only 1 Book available')
    })
})


// cypress will listen to the calls made in the browser and spy the api url invoked in the netwrok layer and check if 
// actual response is required to be sent back or mock response.


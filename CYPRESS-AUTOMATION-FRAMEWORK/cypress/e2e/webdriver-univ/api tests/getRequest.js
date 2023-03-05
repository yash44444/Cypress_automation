/// <reference types="Cypress" />

describe("GET REQUEST", () => {
  var result;
  it("get request", () => {
    result = cy.request("http://localhost/posts");
    result.its("status").should.be("equal", 201);
  });

  it("GET REQUEST VAIDATION", () => {
    cy.request({
      method: "GET",
      url: "http://localhost/posts",
      headers: {
        accept: "application/json",
      },
    }).then((response) => {
      let body = JSON.parse(JSON.stringify(response.body));
      cy.log(body);

      expect(body[0].has.property("title", "Example json server"));

      // looping though all the keys
      body.forEach(function (item) {
        expect(item).to.have.all.keys("id", "title", "author");
      });
    });
  });
});

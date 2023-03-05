/// <reference types="Cypress" />

describe("DELETE REQUEST", () => {
  let radomTitle =
    Math.random().toString(36).substring(1) +
    Math.random().toString(36).substring(1);

  it("delete request", () => {
    cy.request({
      method: "DELETE",
      url: "http://localhost/posts/14",
    }).then((response) => {
      expect(response.status).to.eql(200);
    });
  });
});

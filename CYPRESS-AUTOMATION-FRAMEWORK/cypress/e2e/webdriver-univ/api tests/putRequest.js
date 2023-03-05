/// <reference types="Cypress" />

describe("PUT REQUEST", () => {
  let radomTitle =
    Math.random().toString(36).substring(1) +
    Math.random().toString(36).substring(1);

  it("put request1", () => {
    cy.request({
      method: "PUT",
      url: "http://localhost/posts/2",
      body: {
        title: "radomTitle",
        author: "search jobs",
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
    });
  });
});
 
/// <reference types="Cypress" />

describe("POST REQUEST", () => {
  let radomTitle =
    Math.random().toString(36).substring(1) +
    Math.random().toString(36).substring(1);

  it("post request1", () => {
    cy.request({
      method: "POST",
      url: "http://localhost/posts",
      body: {
        title: "radomTitle",
        author: "sesrch jobs",
      },
    }).then((response) => {
      expect(response.status).to.eql(201);
    });
  });

  it("post request2", () => {
    cy.request({
      method: "POST",
      url: "http://localhost/posts",
      body: {
        title: "radomTitle0",
        author: "sesrch jobs",
      },
    }).then((response) => {
      expect(response.status).to.eql(201);
    });
  });
});

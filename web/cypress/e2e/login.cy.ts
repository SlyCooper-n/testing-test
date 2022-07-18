export {};

describe("Login", () => {
  it("should login", () => {
    cy.login();

    cy.url().should("include", "/home");
  });
});

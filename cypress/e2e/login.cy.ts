/// <reference types="cypress" />
export {};

describe("Login", () => {
  it("should login", () => {
    cy.visit("/");
    cy.get("#email").type("valid@email.com");
    cy.get("#password").type("password");
    cy.get("#confirm-pw").type("password");
    cy.get(".btn").click();

    cy.url().should("include", "/home");
  });
});

/// <reference types="cypress" />

export function login() {
  cy.visit("/");
  cy.get("#email").type("valid@email.com");
  cy.get("#password").type("password");
  cy.get("#confirm-pw").type("password");
  cy.get(".btn").click();
}

describe("Login", () => {
  it("should login", () => {
    login();

    cy.url().should("include", "/home");
  });
});

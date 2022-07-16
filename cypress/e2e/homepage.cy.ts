/// <reference types="cypress" />

import { login } from "./login.cy";

describe("Homepage", () => {
  it("should render app view correctly", () => {
    cy.visit("/");
    login();

    cy.get(".hidden > :nth-child(1) > .btn").click();
    cy.contains("h2", "Habit").should("exist");

    cy.get(".hidden > :nth-child(2) > .btn").click();
    cy.contains("h2", "Accomplishments").should("exist");
  });

  it("should be able to add new habit", () => {
    cy.visit("/");
    login();

    cy.get(".hidden > :nth-child(1) > .btn").click();
    cy.get(".input").type("New Habit");

    cy.get(".mb-8 > .btn").click();

    cy.contains("New Habit").should("exist");
  });
});

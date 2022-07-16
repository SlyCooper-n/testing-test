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

  describe("Habit Checklist", () => {
    it("should be able to add new habit", () => {
      cy.get(".hidden > :nth-child(1) > .btn").click();
      cy.get(".input").type("New Habit");

      cy.get(".mb-8 > .btn").click();

      cy.contains("New Habit").should("exist");
    });

    it("should be able to toggle habit", () => {
      cy.contains("New Habit").click();
      cy.get(".text-success").should("exist");
      cy.get(".text-error").should("not.exist");

      cy.contains("New Habit").click();
      cy.get(".text-success").should("not.exist");
      cy.get(".text-error").should("exist");
    });
  });

  describe("Accomplishments", () => {
    it("should be able to add new accomplishment", () => {
      cy.get(".hidden > :nth-child(2) > .btn").click();

      cy.get("input.input").type("New Accomplishment");
      cy.get(".h-32").type("New Accomplishment Description");
      cy.get(".label-text").click();

      cy.get(".form-control > .btn").click();

      cy.contains(/accomplishment sent successfully/i).should("exist");
    });

    it("should return to Accomplishments dashboard when 'Go back' button is clicked", () => {
      cy.contains("button", "Go back").click();

      cy.contains("h2", "Accomplishments").should("be.visible");

      cy.get("input.input").should("have.value", "");
      cy.get(".h-32").should("have.value", "");
      cy.get(".checkbox").should("be.checked");
    });
  });
});

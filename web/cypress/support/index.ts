// in cypress/support/index.ts
// load type definitions that come with Cypress module
/// <reference types="cypress" />

export {};

declare global {
  namespace Cypress {
    interface Chainable {
      login(): Chainable<Element>;
    }
  }
}

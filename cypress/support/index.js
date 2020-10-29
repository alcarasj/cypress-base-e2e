// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

if (!Cypress.env('EMAIL') || !Cypress.env('PASSWORD')) {
  throw new Error('CYPRESS_EMAIL and CYPRESS_EMAIL need to be set!');
}

before(() => {
  cy.visit('/logout');
  cy.login(Cypress.env('EMAIL'), Cypress.env('PASSWORD'));
});

Cypress.Cookies.defaults({
  preserve: ['Identity', 'Expiration', 'StartTime', 'LoggedIn']
    .map(c => `com.ibm.cloud.iam.${c}.${Cypress.config().baseUrl.includes('test') ? 'test' : 'prod'}`)
});

// To override failure on uncaught exception from out-of-scope third-party libraries.
Cypress.on('uncaught:exception', () => {
  return false;
});
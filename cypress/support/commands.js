/* eslint cypress/no-unnecessary-waiting: 0 */

const getCookiesModalDocument = () => cy
  .get(`iframe[title="TrustArc Cookie Consent Manager"]`)
  .its('0.contentDocument').should('exist');

const getCookiesModalBody = () => getCookiesModalDocument()
  .its('body').should('not.be.undefined')
  .then(cy.wrap);

Cypress.Commands.add('login', (email, password) => {
  cy.wait(7500);
  // getCookiesModalBody().find('.mainContent .pdynamicbutton .call').click();
  cy.wait(5000);
  cy.get('#userid').type(email, { force: true });
  cy.wait(5000);
  cy.get('.login-form__realm-user-id-row .login-form__button.bx--btn.bx--btn--primary').click();
  cy.wait(5000);
  cy.get('#password').type(password, { force: true });
  cy.wait(5000);
  cy.get('.login-form__password-row .login-form__button.bx--btn.bx--btn--primary').click();
});

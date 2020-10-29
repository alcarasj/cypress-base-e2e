/* eslint cypress/no-unnecessary-waiting: 0 */

/**
const getCookiesModalDocument = () => cy
  .get(`iframe[title="TrustArc Cookie Consent Manager"]`)
  .its('0.contentDocument').should('exist');

const getCookiesModalBody = () => getCookiesModalDocument()
  .its('body').should('not.be.undefined')
  .then(cy.wrap);
**/

Cypress.Commands.add('login', (email, password) => {
  // getCookiesModalBody().find('.mainContent .pdynamicbutton .call').click();
  cy.visit('/login?redirect=%2Fiam');
  cy.get('#userid').type(email, { force: true });
  cy.get('.login-form__realm-user-id-row .login-form__button.bx--btn.bx--btn--primary').click();
  cy.get('#password').type(password, { force: true });
  cy.get('.login-form__password-row .login-form__button.bx--btn.bx--btn--primary').click();
});

Cypress.Commands.add('createAccessGroup', (name, description) => {
  cy.visit('/iam/groups');
  cy.get('#create-group--button', { timeout: 10000 }).click();
  cy.get('#access-group--name').type(name);
  cy.get('#access-group--description').type(description);
  cy.get('#app .bx--modal-footer .bx--btn.bx--btn--primary').click();
  cy.url().should('include', '/iam/groups/AccessGroupId-');
  cy.get('.pal--page-header__title-text', { timeout: 10000 }).should('contain', name);
});

Cypress.Commands.add('readAccessGroup', (uuid, expectedName, expectedDescription) => {
  cy.visit(`iam/groups/${uuid}`);
  cy.get('.pal--page-header__title-text', { timeout: 10000 }).should('contain', name);
  cy.get('.pal--page-header__actions .bx--btn--ghost').click();
  cy.get('h3.pal--side-panel__heading').should('contain', expectedName);
  cy.get('.page--subject-description > label').should('contain', expectedDescription);
  // TO-DO Assert table has group.
});

Cypress.Commands.add('updateAccessGroup', (uuid, newName, newDescription) => {
  cy.visit(`iam/groups/${uuid}`);
  cy.get('.pal--actions-panel.bx--overflow-menu', { timeout: 10000 }).click();
  cy.get('.pal--actions-panel-menu :nth-child(2) > button').click();
  cy.get('#access-group--name').type(newName);
  cy.get('#access-group--description').type(newDescription);
  cy.get('#app .bx--modal-footer.bx--btn-set .bx--btn.bx--btn--primary').click();
  cy.url().should('include', `/iam/groups/AccessGroupId-${uuid}`);
  cy.get('.pal--page-header__title-text', { timeout: 10000 }).should('contain', newName);
  // TO-DO Assert table has updated group.
});

Cypress.Commands.add('deleteAccessGroup', uuid => {
  cy.visit(`iam/groups/${uuid}`);
  cy.get('.pal--actions-panel.bx--overflow-menu', { timeout: 10000 }).click();
  cy.get('.bx--overflow-menu-options__option--danger > button').click();
  cy.get('#remove-group-confirmation').check();
  cy.get('#app .bx--modal-footer.bx--btn-set .bx--btn--primary').click();
  // TO-DO Assert table no longer has group.
});
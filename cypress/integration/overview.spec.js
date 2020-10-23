describe('Auth spec', () => {
  it('Should show overview page when going Manage > IAM', () => {
    cy.login(Cypress.env('EMAIL'), Cypress.env('PASSWORD'));
    cy.get('.bx--dropdown-text.bx--cloud-header-list__link', { timeout: 10000 }).click();
    cy.get('#permissions-menu').click();
    cy.get('.pal--page-header__title-text').should('contain', "Manage access and users")
  });
});
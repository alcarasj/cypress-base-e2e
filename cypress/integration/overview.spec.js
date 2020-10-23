describe('Overview page spec', () => {
  it('Should show overview page when going Manage > IAM', () => {
    cy.get('.bx--dropdown-text.bx--cloud-header-list__link', { timeout: 10000 }).click();
    cy.get('#permissions-menu').click();
    cy.get('.pal--page-header__title-text').should('be.equal', 'Manage access and users');
  });
});
describe('Overview page spec', () => {
  it('Should show overview page when going Manage > IAM', () => {
    cy.get('.bx--dropdown-text.bx--cloud-header-list__link', { timeout: 10000 }).click();
    cy.get('#permissions-menu').click();
    cy.get('.pal--page-header__title-text').should('contain', 'Manage access and users');
  });

  it('Should show overview page when left nav option is clicked', () => {
    cy.get('.pal--side-nav__item.pal--side-nav__header', { timeout: 10000 }).click();
    cy.get('.pal--page-header__title-text').should('contain', 'Manage access and users');
  });
});
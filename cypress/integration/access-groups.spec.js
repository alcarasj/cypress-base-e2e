describe('Access groups page spec', () => {
  it('Should show access groups page when left nav option is clicked', () => {
    cy.get('#left-nav-groups', { timeout: 10000 }).click();
    cy.get('.pal--page-header__title-text').should('be.equal', 'Access groups');
  });
});
describe('Access groups spec', () => {

  it('Should show access groups page when left nav option is clicked', () => {
    cy.get('#left-nav-groups', { timeout: 10000 }).click();
    cy.get('.pal--page-header__title-text').should('contain', 'Access groups');
  });

  it('Should be able to CRUD an access group', () => {
    cy.fixture('access-groups.json').then(accessGroup => {
      accessGroup.description += 'Should be able to CRUD an access group';
      cy.createAccessGroup(accessGroup.name, accessGroup.description);
    });
  });
});
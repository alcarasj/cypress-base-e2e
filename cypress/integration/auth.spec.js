describe('Auth spec', () => {
  it('Should show login error for invalid credentials', () => {
    cy.visit('/login');
    cy.login('hello@example.com', '12345678');
  });
});
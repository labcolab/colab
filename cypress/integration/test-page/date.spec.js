context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Load date correctly from go', () => {
    cy.get('[data-test-id="date"]', { timeout: 10000 }).contains('Dec');
  });
});

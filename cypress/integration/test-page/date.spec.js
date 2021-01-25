context('Actions', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/date', {
      statusCode: 200,
      body: 'December 21',
    });

    cy.visit('http://localhost:3000/test');
  });

  it('Load date correctly from go', () => {
    cy.debug();
    cy.get('[data-test-id="date"]', { timeout: 10000 }).contains('December');
  });
});

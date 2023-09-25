describe('Run test marvel app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('START', () => {
    cy.contains('Search characters');
    cy.contains('Search name');
    cy.get('#button-search').should('be.disabled');
  });

  it('FIND', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#search-field').click().type('Ghost');
    cy.get('#button-search').should('not.be.disabled').click();
    cy.contains('Ghost');
    cy.get('#result-1').click();
  });
})
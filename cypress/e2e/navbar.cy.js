describe('Navbar', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001'); 
  });

  it('displays the logo', () => {
    cy.get('.logo').should('be.visible'); // Expecting the logo to be visible
  });

  it('navigates to Home', () => {
    cy.contains('Home').click(); // Click on the Home link
    cy.url().should('include', '/'); // Expecting the URL to include '/'
  });

  it('navigates to My Savings', () => {
    cy.contains('My Savings').click(); // Click on the My Savings link
    cy.url().should('include', '/savings'); // Expecting the URL to include '/savings'
  });

  it('navigates to Shopping', () => {
    cy.contains('Shopping').click(); // Click on the Shopping link
    cy.url().should('include', '/shopping'); // Expecting the URL to include '/shopping'
  });

  it('navigates to Split Bill', () => {
    cy.contains('Split Bill').click(); // Click on the Split Bill link
    cy.url().should('include', '/splitter'); // Expecting the URL to include '/splitter'
  });

  it('navigates to Robot Database', () => {
    cy.contains('Robot Database').click(); // Click on the Robot Database link
    cy.url().should('include', '/robot'); // Expecting the URL to include '/robot'
  });

  it('navigates to Videos', () => {
    cy.contains('Videos').click(); // Click on the Videos link
    cy.url().should('include', '/videos'); // Expecting the URL to include '/videos'
  });
});

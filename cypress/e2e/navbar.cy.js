describe('Navbar', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3001'); 
    });
  
    it('displays the logo', () => {
      cy.get('.logo-container img').should('be.visible'); // Expecting the logo to be visible
    });
  
    it('navigates to Home', () => {
      cy.get('.navbar-links').contains('Home').click(); // Click on the Home link
      cy.url().should('include', '/'); // Expecting the URL to include '/'
    });
  
    it('navigates to My Savings', () => {
      cy.get('.navbar-links').contains('My Savings').click(); // Click on the My Savings link
      cy.url().should('include', '/Savings'); // Expecting the URL to include '/Savings'
    });
  
    it('navigates to Shopping', () => {
      cy.get('.navbar-links').contains('Shopping').click(); // Click on the Shopping link
      cy.url().should('include', '/Store'); // Expecting the URL to include '/Store'
    });
  
    it('navigates to Videos', () => {
      cy.get('.navbar-links').contains('Videos').click(); // Click on the Videos link
      cy.url().should('include', '/VideoPage'); // Expecting the URL to include '/VideoPage'
    });
  
    it('navigates to Login', () => {
      cy.get('.navbar-links').contains('Log in').click(); // Click on the Log in link
      cy.url().should('include', '/Login'); // Expecting the URL to include '/Login'
    });
  });
  
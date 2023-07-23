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

describe('Navbar - Visit and go back', () => {
  it('navigates to Home and back', () => {
    cy.visitAndGoBack('http://localhost:3001'); // Visit the homepage and test navigation
  });

  it('navigates to My Savings and back', () => {
    cy.visitAndGoBack('http://localhost:3001/savings'); // Visit My Savings page and test navigation
  });

  it('navigates to Shopping and back', () => {
    cy.visitAndGoBack('http://localhost:3001/shopping'); // Visit Shopping page and test navigation
  });

  it('navigates to Split Bill and back', () => {
    cy.visitAndGoBack('http://localhost:3001/splitter'); // Visit Split Bill page and test navigation
  });

  it('navigates to Robot Database and back', () => {
    cy.visitAndGoBack('http://localhost:3001/robot'); // Visit Robot Database page and test navigation
  });

  it('navigates to Videos and back', () => {
    cy.visitAndGoBack('http://localhost:3001/videos'); // Visit Videos page and test navigation
  });
});

describe('Navbar - Navigation from all pages', () => {
  it('navigates from My Savings to Videos', () => {
    cy.visit('http://localhost:3001/savings'); // Visit My Savings page
    cy.contains('Videos').click(); // Click on the Videos link
    cy.url().should('include', '/videos'); // Expecting the URL to include '/videos'
  });

  it('navigates from Shopping to Robot Database', () => {
    cy.visit('http://localhost:3001/shopping'); // Visit Shopping page
    cy.contains('Robot Database').click(); // Click on the Robot Database link
    cy.url().should('include', '/robot'); // Expecting the URL to include '/robot'
  });

  it('navigates from Split Bill to Home', () => {
    cy.visit('http://localhost:3001/splitter'); // Visit Split Bill page
    cy.contains('Home').click(); // Click on the Home link
    cy.url().should('eq', 'http://localhost:3001/'); // Expecting the URL to be the homepage
  });

  it('navigates from Robot Database to My Savings', () => {
    cy.visit('http://localhost:3001/robot'); // Visit Robot Database page
    cy.contains('My Savings').click(); // Click on the My Savings link
    cy.url().should('include', '/savings'); // Expecting the URL to include '/savings'
  });

  it('navigates from Videos to Shopping', () => {
    cy.visit('http://localhost:3001/videos'); // Visit Videos page
    cy.contains('Shopping').click(); // Click on the Shopping link
    cy.url().should('include', '/shopping'); // Expecting the URL to include '/shopping'
  });
});

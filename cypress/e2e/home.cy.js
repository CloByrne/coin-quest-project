describe('Home Page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3001');
    });
  
    // Initial UI Display Tests
  
    // Test to verify the welcome heading is displayed
    it('display welcome heading', () => {
      cy.contains('Welcome to Coin Quest Academy').should('be.visible');
    });
  
    // Test to verify the subtitle is displayed
    it('display subtitle', () => {
      cy.contains('What would you like to do today?').should('be.visible');
    });
  
    // Test to verify the "Update My Savings" button is displayed
    it('display the "Update My Savings" button', () => {
      cy.contains('Update My Savings').should('be.visible');
    });
  
    // Test to verify the "Try out your budgeting skill in the shop" button is displayed
    it('display the "Try out your budgeting skill in the shop" button', () => {
      cy.contains('Try out your budgeting skill in the shop').should('be.visible');
    });
  
    // Test to verify the "Learn about saving your money here!" button is displayed
    it('display the "Learn about saving your money here!" button', () => {
      cy.contains('Learn about saving your money here!').should('be.visible');
    });

    // Test to verify the "Work out who owes what on your bill" button is displayed
    it('display the "Work out who owes what on your bill" button', () => {
      cy.contains('Work out who owes what on your bill').should('be.visible');
    });

    // Test to verify the "Search the Robot database" button is displayed
    it('display the "Search the Robot database" button', () => {
      cy.contains('Search the Robot Database').should('be.visible');
    });
  
    // Button Navigation Tests
  
    // Test to verify navigation to the Savings page when "Update My Savings" button is clicked
    it('navigate to the Savings page when "Update My Savings" button is clicked', () => {
      cy.contains('Update My Savings').click();
      cy.url().should('match', /\/savings$/i);
    });
  
    // Test to verify navigation to the Store page when "Try out your budgeting skill in the shop" button is clicked
    it('navigate to the Store page when "Try out your budgeting skill in the shop" button is clicked', () => {
      cy.contains('Try out your budgeting skill in the shop').click();
      cy.url().should('match', /\/shopping$/i);
    });
  
    // Test to verify navigation to the Learning page when "Learn about saving your money here!" button is clicked
    it('navigate to the Learning page when "Learn about saving your money here!" button is clicked', () => {
      cy.contains('Learn about saving your money here!').click();
      cy.url().should('match', /\/videos$/i);
    });

    // Test to verify navigation to the Bill splitter page when "Work out who owes what on your bill" button is clicked
    it('navigate to the Splitter page when "Work out who owes what on your bill" button is clicked', () => {
      cy.contains('Work out who owes what on your bill').click();
      cy.url().should('match', /\/splitter$/i);
    });

    // Test to verify navigation to the Robots Database when "Search the Robot database" button is clicked
    it('navigate to the Robots Database when "Search the Robot database" button is clicked', () => {
      cy.contains('Search the Robot Database').click();
      cy.url().should('match', /\/robot$/i);
    });
  
    // Image Presence Tests
  
    // Test to verify the savings icon image is displayed
    it('display the savings icon image', () => {
      cy.get('img[alt="Savings"]').should('be.visible');
    });
  
    // Test to verify the shopping icon image is displayed
    it('display the shopping icon image', () => {
      cy.get('img[alt="Shopping"]').should('be.visible');
    });
  
    // Test to verify the video icon image is displayed
    it('display the video icon image', () => {
      cy.get('img[alt="Videos"]').should('be.visible');
    });

    // Test to verify the splitter icon image is displayed
    it('display the splitter icon image', () => {
      cy.get('img[alt="Splitter"]').should('be.visible');
    });

    // Test to verify the robot icon image is displayed
    it('display the robot icon image', () => {
      cy.get('img[alt="Robots"]').should('be.visible');
    });
  });
  
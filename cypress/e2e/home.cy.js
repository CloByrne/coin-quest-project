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
  
    // Button Navigation Tests
  
    // Test to verify navigation to the Savings page when "Update My Savings" button is clicked
    it('navigate to the Savings page when "Update My Savings" button is clicked', () => {
      cy.contains('Update My Savings').click();
      cy.url().should('match', /\/savings$/i);
    });
  
    // Test to verify navigation to the Store page when "Try out your budgeting skill in the shop" button is clicked
    it('navigate to the Store page when "Try out your budgeting skill in the shop" button is clicked', () => {
      cy.contains('Try out your budgeting skill in the shop').click();
      cy.url().should('match', /\/store$/i);
    });
  
    // Test to verify navigation to the Learning page when "Learn about saving your money here!" button is clicked
    it('navigate to the Learning page when "Learn about saving your money here!" button is clicked', () => {
      cy.contains('Learn about saving your money here!').click();
      cy.url().should('match', /\/videoPage$/i);
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
  });
  
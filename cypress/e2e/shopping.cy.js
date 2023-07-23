describe('Store', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3001/Shopping'); 
    });
  
    it('displays products', () => {
      cy.get('.left-container li').should('have.length', 20); 
    });
  
    it('adds a product to the cart', () => {
      cy.get('.left-container li').first().as('product');
      cy.get('@product').contains('Add').click();
      cy.get('.right-container li').should('have.length', 1); // Expecting 1 item in the cart
    });
  
    it('removes a product from the cart', () => {
        cy.get('.left-container li').first().as('product');
        cy.get('@product').contains('Add').click();
        cy.get('.right-container li').should('have.length', 1); // Expecting 1 item in the cart
        cy.get('.right-container .remove-button').click();
        cy.get('.right-container li').should('have.length', 0); // Expecting 0 items in the cart
    });

    it('update the budget', () => {
      const budget = 100;
      cy.get('.budget-container input').type(budget.toString());
      cy.get('.budget-container input').should('have.value', budget.toString());
    });
  
    it('adds the 5th and 20th products and confirms the total cost', () => {
        cy.get('.left-container li').eq(4).as('product5'); // Selecting the 5th product
        cy.get('@product5').contains('Add').click();      
        cy.get('.left-container li').eq(19).as('product20'); // Selecting the 20th product
        cy.get('@product20').contains('Add').click();
        cy.get('.right-container li').should('have.length', 2); // Expecting 2 items in the cart
        cy.get('.right-container p').contains(`Total Cost: €${(695 + 12.99).toFixed(2)}`); // Confirming the total cost
        // Checking "Can You Afford Shopping?" section
        cy.get('.budget-container input').type('800'); // Set budget to 800
        cy.get('.right-container p').should('contain', 'Yes! You can afford your shopping.'); // Expecting positive confirmation
        cy.get('.budget-container input').clear().type('30'); // Set budget to 300. There is already a 0 in the box when cleared
        cy.get('.right-container p').should('contain', `Sorry, you cannot afford your shopping. You need to reduce the cart total by €407.99 to match your budget.`); // Expecting negative confirmation with remaining amount to match budget
    });

    it('adds the first 10 products and confirms they are listed in the cart', () => {
        cy.get('.left-container li').as('products');
        for (let i = 0; i < 10; i++) {
            cy.get('@products').eq(i).contains('Add').click();
        }
        cy.get('.right-container li').should('have.length', 10); // Expecting 10 items in the cart     
        cy.get('.right-container p').contains('Total Cost: €1261.21'); // Confirming the total cost
        // Checking "Can You Afford Shopping?" section
        cy.get('.budget-container input').type('1500'); // Set budget to 1500
        cy.get('.right-container p').should('contain', 'Yes! You can afford your shopping.'); // Expecting positive confirmation
        cy.get('.budget-container input').clear().type('100'); // Set budget to 1000. There is already a 0 in the box when cleared
        cy.get('.right-container p').should('contain', 'Sorry, you cannot afford your shopping. You need to reduce the cart total by €261.21 to match your budget.' ); // Expecting negative confirmation with remaining amount to match budget
    });
    
    it('adds the last 10 products and confirms they are listed in the cart', () => {
        cy.get('.left-container li').as('products');
        for (let i = 10; i < 20; i++) {
            cy.get('@products').eq(i).contains('Add').click();
        }
        cy.get('.right-container li').should('have.length', 10); // Expecting 10 items in the cart
        cy.get('.right-container p').contains('Total Cost: €1979.71'); // Confirming the total cost
        // Checking "Can You Afford Shopping?" section
        cy.get('.budget-container input').type('2500'); // Set budget to 2500
        cy.get('.right-container p').should('contain', 'Yes! You can afford your shopping.'); // Expecting positive confirmation
        cy.get('.budget-container input').clear().type('150'); // Set budget to 1500. There is already a 0 in the box when cleared
        cy.get('.right-container p').should('contain', 'Sorry, you cannot afford your shopping. You need to reduce the cart total by €479.71 to match your budget.'); // Expecting negative confirmation with remaining amount to match budget
    });   

    it('adds the first three products and remove the second product', () => {
        cy.get('.left-container li').eq(0).as('product1'); // Selecting the 1st product
        cy.get('@product1').contains('Add').click();      
        cy.get('.left-container li').eq(1).as('product2'); // Selecting the 2nd product
        cy.get('@product2').contains('Add').click();
        cy.get('.left-container li').eq(2).as('product3'); // Selecting the 3rd product
        cy.get('@product3').contains('Add').click();
        cy.get('.right-container li').should('have.length', 3); // Expecting 3 items in the cart
        cy.get('.right-container p').contains(`Total Cost: €${(109.95 + 22.30 + 55.99).toFixed(2)}`); // Confirming the total cost
        cy.get('.right-container li').eq(1).as('product2'); // Selecting the 2nd product
        cy.get('@product2').contains('Remove').click();  
        cy.get('.right-container li').should('have.length', 2); // Expecting 2 items in the cart
        cy.get('.right-container p').contains(`Total Cost: €${(109.95 + 55.99).toFixed(2)}`);
        
    });
});



  
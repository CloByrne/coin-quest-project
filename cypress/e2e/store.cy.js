describe('Store', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3001/Store'); 
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

    it('updates the budget', () => {
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
      
        cy.get('.right-container p')
          .contains(`Total Cost: €${695 + 12.99}`); // Confirming the total cost
      });

      it('adds the first 10 products and confirms they are listed in the cart', () => {
        cy.get('.left-container li').as('products');
      
        for (let i = 0; i < 10; i++) {
          cy.get('@products').eq(i).contains('Add').click();
        }
      
        cy.get('.right-container li').should('have.length', 10); // Expecting 10 items in the cart
           
        cy.get('.right-container p')
          .contains('Total Cost: €1261.21'); // Confirming the total cost
      });
      
      it('adds the last 10 products and confirms the total cost', () => {
        cy.get('.left-container li').as('products');
      
        // Retrieve the last 10 products from the array
        const last10Products = products.slice(-10);
      
        last10Products.forEach((product) => {
          cy.get('@products').contains(product.title).siblings('button').click();
        });
      
        cy.get('.right-container li').should('have.length', 10); // Expecting 10 items in the cart
      
        // Calculate the total cost by summing the prices of the last 10 products
        const totalCost = last10Products.reduce((total, product) => total + product.price, 0);
        cy.get('.right-container p').contains(`Total Cost: €${totalCost.toFixed(2)}`);
      });
      
           


  });
  
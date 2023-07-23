describe('ExpenseSplitterPage', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3001/splitter');
    });
  
    it('render the ExpenseSplitter and ExpenseResult components', () => {
      cy.get('.expense-splitter').should('exist');
      cy.get('.expense-result').should('exist');
    });
  
    it('display the total cost and number of people inputs', () => {
        cy.get('.expense-splitter').should('exist')
        .within(() => {
            cy.contains('Total Cost:')
            cy.get('input[name="totalCost"]').should('be.visible')

            cy.contains('Number of People:')
            cy.get('input[name="numberOfPeople"]').should('be.visible')
        })
    });

    it('should update the total cost input when typed', () => {
      cy.get('input[name="totalCost"]').type('500');
      cy.get('input[name="totalCost"]').should('have.value', '500');
    });
  
    it('should update the number of people input when typed', () => {
      cy.get('input[name="numberOfPeople"]').type('3');
      cy.get('input[name="numberOfPeople"]').should('have.value', '3');
    });
  
    it('should not split the expense when submitting without total cost', () => {
      cy.get('input[name="numberOfPeople"]').type('3');
      cy.get('button[type="submit"]').click();
    
      // Ensure that the expense split action is not allowed
      cy.get('.expense-details').should('not.exist');
    });

    it('should not split the expense when submitting without number of people', () => {
      cy.get('input[name="totalCost"]').type('3000');
      cy.get('button[type="submit"]').click();
    
      // Ensure that the expense split action is not allowed
      cy.get('.expense-details').should('not.exist');
    });
 
    it('should display the total cost and number of people in the ExpenseResult component', () => {
      cy.get('input[name="totalCost"]').type('500');
      cy.get('input[name="numberOfPeople"]').type('3');
      cy.get('button[type="submit"]').click();
      cy.wait(500); // Wait for the data to update
      cy.get('.expense-result span').eq(0).should('contain.text', '€500.00');
      cy.get('.expense-result span').eq(1).should('contain.text', '3');
    });
  
    it('should update the cost per person in the ExpenseResult component', () => {
      cy.get('input[name="totalCost"]').type('500');
      cy.get('input[name="numberOfPeople"]').type('3');
      cy.get('button[type="submit"]').click();
      cy.wait(500); // Wait for the data to update
      cy.get('.expense-result span').eq(2).should('contain.text', '€166.67');
    });

    it('should display the cost per person rounded to 2 decimal places in the ExpenseResult component', () => {
      cy.get('input[name="totalCost"]').type('1000');
      cy.get('input[name="numberOfPeople"]').type('5');
      cy.get('button[type="submit"]').click();
      cy.wait(500); // Wait for the data to update
      cy.get('.expense-result span').eq(2).should('contain.text', '€200.00');
    });
  });
  
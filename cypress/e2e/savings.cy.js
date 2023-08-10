describe('Savings Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3001/savings'); 
    });
  
    it('should display the page title', () => {
      cy.contains('h1', 'My Savings');
    });

    it('show error message when saving a blank goal', () => {
        const newGoal = '';
      
        cy.get('.right-container') 
          .should('be.visible') 
          .within(() => {
            cy.contains('Add Goal')
              .click();
      
              cy.get('.goal-form input')
              .should('be.visible')
      
              cy.contains('Save Goal')
              .click();
      
            cy.get('.goal-form p')
              .should('have.text', 'Enter your target savings amount:Please enter a valid savings amount.') 

          });
      });
      
      it('allow entering and saving a savings goal', () => {
        const newGoal = '50';
      
        cy.get('.right-container')
          .should('be.visible') 
          .within(() => {
            cy.contains('Add Goal')
              .click();
      
            cy.get('.goal-form input')
              .should('be.visible')
              .clear() 
              .type(newGoal);
      
            cy.contains('Save Goal')
              .click();
      
            cy.get('.goal-form p')
              .should('not.exist'); 
      
            cy.get('.saving-goal h2')
              .should('contain', `Savings Goal: €${newGoal}`); // Verify that the Savings Goal is updated to '5'
          });
      });
      
      it('allow entering and submitting pocket money transaction', () => {
        const pocketMoneyAmount = '5.00';
        const transactionDescription = 'Pocket money';
        const transactionDate = '2023-01-01';
      
        cy.get('.left-container')
          .should('be.visible')
          .within(() => {
            cy.log('Before getting pocket-money input');
            cy.get('.pocket-money input[type="number"]')
              .clear()
              .type(pocketMoneyAmount);
            cy.log('Before getting input-description input');
            cy.get('.input-description input[type="text"]')
              .type(transactionDescription);
            cy.log('Before getting input-date input');
            cy.get('.input-date input[type="date"]')
              .clear()
              .type(transactionDate);
            cy.contains('Add').click();
          });
      
        cy.get('.right-container')
          .should('be.visible')
          .within(() => {
            cy.get('.transaction-list')
              .should('have.length', 1); // Verify that one transaction item exists
            cy.get('.transaction-date')
              .should('contain', transactionDate); // Verify the date is displayed correctly
            cy.get('.transaction-amount')
              .should('contain', pocketMoneyAmount); // Verify the amount is displayed correctly
            cy.get('.transaction-description')
              .should('contain', transactionDescription); // Verify the description is displayed correctly
          });
      });
      
      it('allow entering and submitting spending transaction', () => {
        const spendingAmount = '1.50';
        const spendingDescription = 'Sweets';
        const spendingDate = '2023-01-02';
      
        cy.get('.left-container')
          .should('be.visible')
          .within(() => {
            cy.log('Before getting spending-money input');
            cy.get('.spending-money input[type="number"]')
              .clear()
              .type(spendingAmount);
            cy.log('Before getting spending-description input');
            cy.get('.spending-description input[type="text"]')
              .type(spendingDescription);
            cy.log('Before getting spending-date input');
            cy.get('.spending-date input[type="date"]')
              .clear()
              .type(spendingDate);
            cy.get('.spend-button').click();

          });
      
        cy.get('.right-container')
          .should('be.visible')
          .within(() => {
            cy.get('.transaction-list')
              .should('have.length', 1); // Verify that one transaction item exists
            cy.get('.transaction-date')
              .should('contain', spendingDate); // Verify the date is displayed correctly
            cy.get('.transaction-amount')
              .should('contain', spendingAmount); // Verify the amount is displayed correctly
            cy.get('.transaction-description')
              .should('contain', spendingDescription); // Verify the description is displayed correctly
          });
      });
      

      it('allow deleting a transaction', () => {
        const pocketMoneyAmount = '5.00';
        const transactionDescription = 'Pocket money';
        const transactionDate = '2023-01-01';
        const spendingAmount = '1.50';
        const spendingDescription = 'Sweets';
        const spendingDate = '2023-01-02';
      
        cy.get('.left-container').should('be.visible').within(() => {
          // Add pocket money transaction
          cy.get('.pocket-money input[type="number"]').clear().type(pocketMoneyAmount);
          cy.get('.input-description input[type="text"]').type(transactionDescription);
          cy.get('.input-date input[type="date"]').clear().type(transactionDate);
          cy.contains('Add').click();
      
          // Add spending transaction
          cy.get('.spending-money input[type="number"]').clear().type(spendingAmount);
          cy.get('.spending-description input[type="text"]').type(spendingDescription);
          cy.get('.spending-date input[type="date"]').clear().type(spendingDate);
          cy.get('.spend-button').click();
        });
      
        cy.get('.right-container').should('be.visible').within(() => {
            cy.get('.transaction-list li').should('have.length', 2);
            cy.get('.transaction-list li:first-child button').click();
            cy.get('.transaction-list li').should('have.length', 1);
        });
      });
      
  
      it('display the total saved amount', () => {
        const pocketMoneyAmount = '50.00';
        const spendingAmount = '20.00';
        const goal = '100.00';
      
        // Add pocket money transaction
        cy.get('.pocket-money input[type="number"]').type(pocketMoneyAmount);
        cy.get('.input-description input[type="text"]').type('Received pocket money');
        cy.contains('Add').click();
      
        // Add spending transaction
        cy.get('.spending-money input[type="number"]').type(spendingAmount);
        cy.get('.spending-description input[type="text"]').type('Bought sweets');
        cy.get('.spending-date input[type="date"]').type('2023-01-01');
        cy.get('.spend-button').click();
      
        // Set the savings goal
        cy.contains('Add Goal').click();
        cy.get('.goal-form input').type(goal);
        cy.contains('Save Goal').click();
      
        // Calculate the total saved
        const totalSaved = parseFloat(pocketMoneyAmount) - parseFloat(spendingAmount);
      
        // Verify the total saved amount is displayed
        cy.get('.transaction-list .total-saved').should('contain', totalSaved.toFixed(2));
      
        // Verify the goal is displayed
        cy.get('.saving-goal').should('contain', `Savings Goal: €${goal}`);
      
        // Calculate the amount left to save
        const amountLeftToSave = parseFloat(goal) - parseFloat(totalSaved);
      
        // Verify the amount left to save is displayed
        cy.get('.transaction-list .amount-left-to-save').should('contain', amountLeftToSave.toFixed(2));
      });
      
      
  
      it('display the goal reached message', () => {
        const goal = '50.00';
        const pocketMoneyAmount = '75.00';
        const spendingAmount = '25.00'; 
      
        // Set the savings goal
        cy.contains('Add Goal').click();
        cy.get('.goal-form input').type(goal);
        cy.get('.goal-form button').click();
      
        // Add pocket money transaction
        cy.get('.pocket-money input[type="number"]').type(pocketMoneyAmount);
        cy.get('.input-description input[type="text"]').type('Received pocket money');
        cy.contains('Add').click();
      
        // Add spending transaction equal to the goal amount
        cy.get('.spending-money input[type="number"]').type(spendingAmount);
        cy.get('.spending-description input[type="text"]').type('Bought items');
        cy.get('.spending-date input[type="date"]').type('2023-01-01');
        cy.get('.spend-button').click();
      
        // Verify the goal reached message is displayed
        cy.get('.transaction-list .goal-reached-message').should('contain', 'Goal Reached!');
      });
      
      
  
      it('display the amount left to save', () => {
        const goal = '100.00';
        const pocketMoneyAmount = '40.00';
      
        // Set the savings goal
        cy.contains('Add Goal').click();
        cy.get('.goal-form input').type(goal);
        cy.get('.goal-form button').click();
      
        // Add pocket money transaction
        cy.get('.pocket-money input[type="number"]').type(pocketMoneyAmount);
        cy.get('.input-description input[type="text"]').type('Received pocket money');
        cy.contains('Add').click();
      
        // Calculate the amount left to save
        const amountLeftToSave = parseFloat(goal) - parseFloat(pocketMoneyAmount);
      
        // Verify the amount left to save is displayed
        cy.get('.transaction-list .amount-left-to-save').should('contain', amountLeftToSave.toFixed(2));
      });

      it('show error message when saving a negative goal amount', () => {
        const newGoal = '-50'; // Negative goal amount

        cy.get('.right-container').should('be.visible').within(() => {
          cy.contains('Add Goal').click();
          cy.get('.goal-form input').should('be.visible').clear().type(newGoal);
          cy.contains('Save Goal').click();
          cy.get('.goal-form p').should('have.text', 'Enter your target savings amount:Please enter a valid savings amount.');
        });
      });

      it('does not allow saving a zero savings goal', () => {
        const newGoal = '0'; // Zero savings goal

        cy.get('.right-container').should('be.visible').within(() => {
          cy.contains('Add Goal').click();
          cy.get('.goal-form input').should('be.visible').clear().type(newGoal);
          cy.contains('Save Goal').click();
          cy.get('.goal-form p').should('have.text', 'Enter your target savings amount:Please enter a valid savings amount.');
        });
      });

      it('allow entering and submitting multiple pocket money transactions', () => {
        const pocketMoneyAmounts = ['10.00', '5.50', '2.75'];
        const transactionDescription = 'Pocket money';
        const transactionDate = '2023-01-01';
      
        cy.get('.left-container').should('be.visible').within(() => {
          pocketMoneyAmounts.forEach((amount, index) => {
            cy.get('.pocket-money input[type="number"]').clear().type(amount);
            cy.get('.input-description input[type="text"]').type(transactionDescription);
            cy.get('.input-date input[type="date"]').clear().type(transactionDate);
            cy.contains('Add').click();
          });
        });
      
        cy.get('.right-container').should('be.visible').within(() => {
          cy.get('.transaction-list li').should('have.length', pocketMoneyAmounts.length);
          pocketMoneyAmounts.forEach((amount, index) => {
            cy.get('.transaction-date').eq(index).should('contain', transactionDate);
            cy.get('.transaction-amount').eq(index).should('contain', amount);
            cy.get('.transaction-description').eq(index).should('contain', transactionDescription);
          });
        });
      });
      

      it('allow entering and submitting multiple spending transactions', () => {
        const spendingAmount = ['3.50', '2.25', '1.00'];
        const spendingDescription = ['Coffee', 'Snack', 'Bus'];
        const spendingDate = ['2023-01-02', '2023-01-03', '2023-01-04'];
      
        cy.get('.left-container').should('be.visible').within(() => {
          spendingAmount.forEach((amount, index) => {
            cy.get('.spending-money input[type="number"]').clear().type(amount);
            cy.get('.spending-description input[type="text"]').type(spendingDescription[index]);
            cy.get('.spending-date input[type="date"]').clear().type(spendingDate[index]);
            cy.get('.spend-button').click();
          });
        });
      
        cy.get('.right-container').should('be.visible').within(() => {
          cy.get('.transaction-list li').should('have.length', spendingAmount.length);
          spendingAmount.forEach((amount, index) => {
            cy.get('.transaction-date').eq(index).should('contain', spendingDate[index]);
            cy.get('.transaction-amount').eq(index).should('contain', amount);
            cy.get('.transaction-description').eq(index).should('contain', spendingDescription[index]);
          });
        });
      });
      

      it('show the correct total saved amount after multiple transactions', () => {
        const pocketMoneyTransactions = ['10.00', '5.50', '2.75'];
        const spendingTransactions = ['3.50', '2.25', '1.00'];
        const totalSaved = pocketMoneyTransactions.reduce((total, amount) => total + parseFloat(amount), 0) -
          spendingTransactions.reduce((total, amount) => total + parseFloat(amount), 0);

        cy.get('.left-container').should('be.visible').within(() => {
          pocketMoneyTransactions.forEach((amount) => {
            cy.get('.pocket-money input[type="number"]').clear().type(amount);
            cy.contains('Add').click();
          });

          spendingTransactions.forEach((amount) => {
            cy.get('.spending-money input[type="number"]').clear().type(amount);
            cy.get('.spend-button').click();
          });
        });

        cy.get('.right-container').should('be.visible').within(() => {
          cy.get('.transaction-list .total-saved').should('contain', totalSaved.toFixed(2));
        });
      });    
      
  });

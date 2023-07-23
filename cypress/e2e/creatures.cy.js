describe('Creatures', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3001/robot'); 
    });
  
    it('displays the search box and button', () => {
      cy.get('.creatures-search-input input').should('be.visible'); // Expecting the search box to be visible
      cy.get('.creatures-search-input button').should('be.visible'); // Expecting the search button to be visible
    });
  
    it('displays the search results table', () => {
      cy.get('.creatures-search-table').should('be.visible'); // Expecting the search results table to be visible
    });

    it('displays search results when searching Name column', () => {
        const searchQuery = 'Rob';
        cy.get('.creatures-search-input input').type(searchQuery);
        cy.wait(1000);
        // Use cy.contains() to find the "Search" button and click it
        cy.contains('button', 'Search').click();
        // Wait for the results to load and check if 6 rows are displayed
        cy.get('.creatures-search-table tbody tr').should('have.length', 6);
      });
  
    it('displays search results when searching Country Column', () => {
        const searchQuery = 'Ireland';
        cy.get('.creatures-search-input input').type(searchQuery);
        cy.wait(1000);
        // Use cy.contains() to find the "Search" button and click it
        cy.contains('button', 'Search').click();
        // Wait for the results to load and check if 4 rows are displayed
        cy.get('.creatures-search-table tbody tr').should('have.length', 4);
      });

      it('displays search results when searching Currency column', () => {
        const searchQuery = 'Yen';
        cy.get('.creatures-search-input input').type(searchQuery);
        cy.wait(1000);
        // Use cy.contains() to find the "Search" button and click it
        cy.contains('button', 'Search').click();
        // Wait for the results to load and check if 16 rows are displayed
        cy.get('.creatures-search-table tbody tr').should('have.length', 16);
      });

      it('displays search results when searching Colour column', () => {
        const searchQuery = 'Pink';
        cy.get('.creatures-search-input input').type(searchQuery);
        cy.wait(1000);
        // Use cy.contains() to find the "Search" button and click it
        cy.contains('button', 'Search').click();
        // Wait for the results to load and check if 51 rows are displayed
        cy.get('.creatures-search-table tbody tr').should('have.length', 51);
      });
      
      it('displays search results when searching Job column', () => {
        const searchQuery = 'Teacher';
        cy.get('.creatures-search-input input').type(searchQuery);
        cy.wait(1000);
        // Use cy.contains() to find the "Search" button and click it
        cy.contains('button', 'Search').click();
        // Wait for the results to load and check if 4 rows are displayed
        cy.get('.creatures-search-table tbody tr').should('have.length', 4);
      });

      it('displays search results when searching Amount column', () => {
        const searchQuery = '746';
        cy.get('.creatures-search-input input').type(searchQuery);
        cy.wait(1000);
        // Use cy.contains() to find the "Search" button and click it
        cy.contains('button', 'Search').click();
        // Wait for the results to load and check if 4 rows are displayed
        cy.get('.creatures-search-table tbody tr').should('have.length', 2);
      });
     
    it('displays "No results found." when searching for an invalid robot', () => {
      const searchQuery = 'InvalidRobot123'; 
      cy.get('.creatures-search-input input').type(searchQuery);
      cy.get('.creatures-search-input button').click();
  
      cy.contains('No results found.').should('be.visible'); // Expecting "No results found." to be displayed
    });
 /* 
    it('displays all results when clearing the search box', () => {
      const searchQuery = 'Ireland'; 
      cy.get('.creatures-search-input input').type(searchQuery);
      cy.get('.creatures-search-input button').click();
  
      cy.get('.creatures-search-input input').clear();
      cy.get('.creatures-search-input button').click();
  
      cy.get('.creatures-search-table tbody tr').should('have.length', 0); // Expecting all results to be displayed
    });*/
  });
  
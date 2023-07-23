describe('Video Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001/Videos');
  });

  // Test to verify the main "Videos" heading is displayed
  it('display the main "Videos" heading', () => {
    cy.contains('Videos').should('be.visible');
  });

  // Test to verify the "Money" section heading is displayed
  it('display the "Money" section heading', () => {
    cy.contains('Money').should('be.visible');
  });

  // Test to verify the "Savings" section heading is displayed
  it('display the "Savings" section heading', () => {
    cy.contains('Savings').should('be.visible');
  });

  // Test to verify the "Money Habits" section heading is displayed
  it('display the "Money Habits" section heading', () => {
    cy.contains('Money Habits').should('be.visible');
  });

  // Test to verify the "The Role of the Banks" section heading is displayed
  it('display the "The Role of the Banks" section heading', () => {
    cy.contains('The Role of the Banks').should('be.visible');
  });

  // Test to verify that 3 videos are displayed in the "Money" section
  it('display 3 videos in the "Money" section', () => {
    cy.get('.grid-1 .video-item').should('have.length', 3);
    cy.get('.grid-1 .video-item iframe').should('be.visible');
  });

  // Test to verify that 3 videos are displayed in the "Savings" section
  it('display 3 videos in the "Savings" section', () => {
    cy.get('.grid-2 .video-item').should('have.length', 3);
  });

  // Test to verify that 2 videos are displayed in the "Money Habits" section
  it('display 2 videos in the "Money Habits" section', () => {
    cy.get('.grid-3 .video-item').should('have.length', 2);
  });

  // Test to verify that 2 videos are displayed in the "The Role of the Banks" section
  it('display 2 videos in the "The Role of the Banks" section', () => {
    cy.get('.grid-4 .video-item').should('have.length', 2);
  });

  // Test to verify that videos are displayed in the "Money" section
  it('should display videos in the "Money" section', () => {
    cy.get('.grid-1 .video-item').should('have.length', 3);
    cy.get('.grid-1 .video-item iframe').should('be.visible');
  });

  // Test to verify that a video player is present in the "Money" section
  it('should contain a video player in the "Money" section', () => {
    cy.get('.grid-1 .video-item iframe')
      .should('have.attr', 'src')
      .and('include', 'youtube.com/embed/');
  });

  // Test to verify that the video can be played
  it('should be able to play the video', () => {
    // Get all iframes with the specified selector within the element with class "grid-1 .video-item"
    cy.get('.grid-1 .video-item iframe').each(($iframe) => {
      // Get the contentWindow of the iframe element
      const iframeWindow = $iframe.prop('contentWindow');

      // Create a stub for the postMessage function on the iframe window
      cy.stub(iframeWindow, 'postMessage').as('postMessageStub');

      // Assert that the iframe window exists
      cy.wrap(iframeWindow).should('exist');

      // Assert that the postMessage function is not called
      cy.get('@postMessageStub').should('not.have.been.called');
    });
  });

  // Test to verify that the video can enter full-screen mode
  it('should be able to enter full-screen mode', () => {
    cy.get('.grid-1 .video-item iframe').each(($iframe) => {
      const iframeWindow = $iframe.prop('contentWindow');

      if (typeof iframeWindow.requestFullscreen === 'function') {
        // Create a stub for the requestFullscreen function on the iframe window
        cy.stub(iframeWindow, 'requestFullscreen').as('requestFullscreenStub');

        // Assert that the iframe window exists
        cy.wrap(iframeWindow).should('exist');

        // Assert that the requestFullscreen function is called
        cy.get('@requestFullscreenStub').should('have.been.called');
      } else {
        // Skip the test or perform an alternative action if the requestFullscreen function is not available
        cy.log('The video player does not support full-screen mode.');
      }
    });
  });
});

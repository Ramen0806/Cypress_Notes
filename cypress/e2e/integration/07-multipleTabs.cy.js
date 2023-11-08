describe('Interacting with Multiple tabs', () => {
    
    it('Multiple tabs',() => {
        
        cy.visit('https://techglobal-training.com/frontend/')

        cy.clickCard('Multiple Windows')

        cy.get('#microsoft').should('have.attr','target','_blank')
        cy.get('#apple').invoke('removeAttr', 'target').click()
   
        

    });
    /**
   * Go to https://techglobal-training.com/frontend/
   * Click on the "Multiple Windows" card
   * Click on the "Apple" link
   * Validate that the child window title is "Apple"
   * Naviagte back to the main page 
   * Validate title contains "techglobal"
   */

    it('Multi tabs - Test 1',() => {

        cy.visit('https://techglobal-training.com/frontend/')

        cy.clickCard('Multiple Windows')

        cy.get('#apple').invoke('removeAttr', 'target').click()
        cy.get('title').contains('Apple')

        cy.go('back')

        cy.get('title').contains('Techglobal')
    });


    /**
   * Go to https://techglobal-training.com/frontend/
   * Click on the "Multiple Windows" card
   * Click on the "Apple" link and validate URL contains "https://www.apple.com/"
   * Click on the "Microsoft" link and validate URL contains "https://www.microsoft.com/en-us/"
   * Click on the "Tesla" link and validate URL contains "https://www.tesla.com/"
   */

    it.only('HMW', () => {
        cy.visit('https://techglobal-training.com/frontend/')

        cy.clickCard('Multiple Windows')

        cy.get('#apple').invoke('removeAttr', 'target').click()

        cy.url().should('include', 'https://www.apple.com/')

        cy.go('back')

        cy.get('#microsoft').invoke('removeAttr', 'target').click()

        cy.url().should('include', 'https://www.microsoft.com/en-us/')

        cy.go('back')
         
        cy.get('#tesla').invoke('removeAttr', 'target').click()

        cy.url().should('include', 'https://www.tesla.com/')
        
        cy.go('back')


    })


})
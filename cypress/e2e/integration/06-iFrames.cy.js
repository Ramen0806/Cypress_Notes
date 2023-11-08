describe('iFrames in Cypress', () => {

/**
   * Go to https://techglobal-training.com/frontend/
   * Click on the "IFrames" card
   * Validate the "Please fill out your information below" text
   */

    it('iFrames',() => {
        cy.visit('https://techglobal-training.com/frontend/')
        cy.clickCard('IFrames')
        cy.get('#form_frame').its('0.contentDocument.body').should('not.be.empty')
        .find('#name_form > p').should('have.text','Please fill out your information below')
        
        /* Go to https://techglobal-training.com/frontend/
        * Click on the "IFrames" card
        * Enter "John" into the first name input box
        * Enter "Doe" into the last name input box
        * Click on the "SUBMIT" button
        * Validate the result equals "You entered: John Doe"
        */

    });
    
    it.only('iFrames validate login', () => {
        cy.visit('https://techglobal-training.com/frontend/')
        cy.clickCard('IFrames')
        
        
        const names = ['Ramez','Karim']
        
        cy.get('#form_frame').its('0.contentDocument.body').as('iFrame')
        
        cy.get('@iFrame').should('not.be.empty')
        .find('input').each(($el,index) => {
            cy.wrap($el).type(names[index])
            
        })
        cy.get('@iFrame').find('button').click()
        cy.get('#result').should('have.text', `You entered: ${names.join(' ')}`)


    });
});
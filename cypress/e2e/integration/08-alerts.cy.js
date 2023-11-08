
describe('alerts',() => {

    it('Handling the warning and confirmation alert', ()=> {
        cy.visit('https://techglobal-training.com/frontend/')

        cy.clickCard('Alerts')

        cy.get('#warning_alert').click()

        cy.on('windown:alert', (str) => {

            expect(str).to.equal("You are on TechGlobal Training application.")
        })

        cy.get('#action').should('have.text','You accepted warning by clicking OK.')

        
    })


    it('Handling the confirmation alert', ()=> {
        cy.visit('https://techglobal-training.com/frontend/')

        cy.clickCard('Alerts')
        
        cy.get('#confirmation_alert').click()

        cy.once('window:confirm', (str) => {
            expect(str).to.equal("Would you like to stay on TechGlobal Training application?")
            return false;
        })

        cy.get('#action').should('have.text','You rejected the alert by clicking Cancel.')

        cy.get('#confirmation_alert').click()

        cy.get('#action').should('have.text','You confirmed the alert by clicking OK.')

    })

    it('Handling prompt alerts',() => {
        cy.visit('https://techglobal-training.com/frontend/')

        cy.clickCard('Alerts')
        

/*
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns(null)
        })

        cy.window().then((win) => {
            cy.stub(win, 'prompt')
            return false
        })
*/
        cy.window().then((win) => {
            cy.stub(win, 'prompt').callsFake((message) => {
                console.log(message); // "This is a message"
                return 'My message'
            })
        })


        cy.get('#prompt_alert').click()



    })

}) 
/// <reference types="cypress" />

//This is describe the test block that holds group of tests (comes from Mocha)
describe('My group of Tests', () => {

//This is the individual test (it comes also from Mocha)
    it('Visit TechGlobal training app', () => {
        // This command will be executed in Cypress browser and opens a new tab with specified URL
        cy.visit('https://techglobal-training.com/')

        cy.reload()

        cy.visit('https://techglobal-training.com/frontend')

       // cy.go('back')
        cy.get(-1)

        //cy.go('forward')
        
        cy.go(1)

        cy.go(-1)
        
        // Title validation of web page
        cy.title().should('eq', 'Techglobal Training | Home')

        cy.url().should('eq','https://techglobal-training.com/')
        cy.url().should('contain','https://techglobal-training.com')

    }) 

    it('My First Test', () => {
        expect(true).to.equal(true)
    })

    it('Logo', () =>{
        cy.visit('https://techglobal-training.com/')

        //check if the logo is visibile and clickable 

        cy.get("#logo").should('be.visible').click()
        
    
    })
})
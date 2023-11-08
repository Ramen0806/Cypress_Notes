/// <reference types="cypress" />

describe ('Cypress Selectors',() => {

    it('Practice Web Elements using - get and contains', () => {
        cy.visit('https://techglobal-training.com/frontend')
        
        //Locate the web element by its visual text
        cy.contains('Waits')
        
        //returns the first match it finds
        cy.contains('Project')

        cy.get('.CardGrids_CardGrids__qDdyI').as('allCards')
        
        cy.get('@allCards')

        cy.get('.cards')

        //Returns the first element from multiple web elements
        cy.get('.cards').first()

        //Returns the last element from multiple web elements
        cy.get('.cards').last()

        //Returns the web element by the index()

        cy.get('.cards').eq(8)

        //Locates the web element by its VISUAL text on the UI
        cy.contains('Html Elements')

        //All the commands below return the same result but they get more specific
        cy.contains('.cards','Html Elements')
        
        cy.get('@allCards').contains('Html Elements')

        cy.get('#card-1').contains('Html Elements')

    }),

    it('Practice Web Elements using - find', () => {

        cy.visit('https://techglobal-training.com/frontend')

        cy.contains('.cards','Html Elements').click()

        // When we do this, we try to locate web element with 'Paragrpahs' text web container
        cy.get('div').contains('Paragraphs')
        
        cy.get('#radio-button-group div')

        //find gets us the web element unlike contains which check the text element
        cy.get('#radio-button-group').find('div')

    }),

    it('Practice Web Elements using - next(),prev(),nextAll(), prevAll()', () => {

        cy.visit('https://techglobal-training.com/frontend')

        cy.contains('.cards','Html Elements').click()
        
        //When we click on Html Elements card and then use next() function, it will take us to the next sibling of that element
        
        cy.get('div').contains('Paragraphs').next()

        // NextAll () => this will locate all next immediate sibilings

        cy.get('div').contains('Paragraphs').nextAll()

        //prev() => locates the immediate previous sibiling

        cy.get('#testing_paragraph').prev()

        //prevAll() => this will locate all the previous immediate sibilings

        cy.get('#testing_paragraph').prevAll()

        
    })
})
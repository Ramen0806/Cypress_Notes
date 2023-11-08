
describe('CSS Locators', () => {

    it('Understanding CSS Syntax', () => {

        cy.visit('https://techglobal-training.com/frontend/html-elements')
        
        cy.get('#register_button')

        cy.get('h3')

        cy.get('li')

        cy.get('input')

    })

    it('Understanding CSS Syntax -Locating using id and class', () => {

        cy.visit('https://techglobal-training.com/frontend/html-elements')
        
        cy.get('#hello_paragraph')

        cy.get('#testing_paragraph')

        cy.get('#microsoft_check')
    })


    it('Understanding CSS Syntax -Locating Web elements with multiple arrtibutes  ', () => {

        cy.visit('https://techglobal-training.com/frontend/html-elements')

        cy.get('button.is-inline')
        cy.get('label.is-inline')
        cy.get('div#checkbox-button-group')

 
        
    })


    it('Understanding CSS Syntax -Locating child, descendant, adjacent web elements ', () => {

        cy.visit('https://techglobal-training.com/frontend/html-elements')
 
        cy.get('div >#hello_paragraph')
        
        cy.get('div >#testing_paragraph')

        cy.get('.is-flex > h3')

        cy.get('#radio-button-group > h3')

        cy.get('#radio-button-group > div> #java_radio > #radio_1_option_1')


        /**
         * Descendant Selector (>) *
         * Description: Targets elements nested anywhere within a specific parent.
         */


        cy.get('div  #radio_1_option_1')
        
        cy.get('div  #ordered_list_item1')

        //locates immediate sibiling of h3
        cy.get('#checkbox-button-group > h3 ~ div')

        //locates all immediate siblings of h3
        cy.get('#checkbox-button-group > h3 + div')

        cy.get('#checkbox-button-group > h3 ~ *')

        //locates group elements

        cy.get('div > h3 +')

        cy.get('button , a')

        cy.get('button , input')

        cy.get('li , p , button')

        cy.get('#apple_check, #java_radio ')

        cy.get('#checkbox-button-group > div > #checkbox_1, label')


    }),

    it('Understanding CSS Syntax -attributes locaters ', () => {

        cy.visit('https://techglobal-training.com/frontend/html-elements')
 
        cy.get('[class="radio"] > input')


})


it('Understanding CSS Syntax - dynamic attributes  ', () => {

    cy.visit('https://techglobal-training.com/frontend/html-elements')

    /**
     *  => * (contains)
     *  => ^ (starts with)
     *  => $ (ends with)
     */
    cy.get('[class ^= rad]')

})

it('Understanding CSS Syntax - dynamic attributes  ', () => {

    cy.visit('https://techglobal-training.com/frontend/dynamic-elements')

    /**
     *  => * (contains)
     *  => ^ (starts with)
     *  => $ (ends with)
     */
    cy.get('[id ^= box_1]').should('be.visible')
    cy.get('[id ^= box_2]').should('be.visible')

})

it('Understanding CSS Syntax - pseudo classes ', () => {

    cy.visit('https://techglobal-training.com/frontend/html-elements')

    cy.get('#ordered_list')

    cy.get('#ordered_list li:last-child')

    cy.get('#ordered_list li:first-child')

    cy.get('#ordered_list li:nth-child(1) ')

    cy.get('option:selected ')

        //NOTE: You can practice below locator using below URL
        // cy.visit('https://techglobal-training.com/js-exercises/js-output')
        // cy.get('.explanation.content > p + ul > li:first-child')
})
})
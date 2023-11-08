describe('File Download & Upload', () => {

it('File Download',() => {
    /**
   * Go to https://techglobal-training.com/frontend/
   * Click on the "File Download" card
   * Click on the "TechGlobal School.pptx" file
   * Validate the file is downloaded in your Downloads file
   */

    cy.visit('https://techglobal-training.com/frontend');

    cy.clickCard('File Download & Upload');

    cy.get('#file_download').click()

    const fileName = 'SampleText.txt'

    cy.readFile(`cypress/downloads/${fileName}`)

})

it.only('File Upload',() => {
     /**
   * Go to https://techglobal-training.com/frontend/
   * Click on the "File Upload" card
   * Send the path of the file as keys to the "Choose File" input box
   * Click on the "UPLOAD" button
   * Validate the result message equals "You Uploaded 'hello.txt'"
   */

    cy.visit('https://techglobal-training.com/frontend');

    cy.clickCard('File Download & Upload');

    const fileName = 'SampleText.txt'

    cy.get('#file_upload').selectFile(`cypress/downloads/${fileName}`)

    cy.get('#file_submit').realClick()

    cy.get('#result').should('have.text',`You uploaded ${fileName}`)


    /*
    * Way to upload more than 1 file for websities that allow it
    * cy.get('#file_upload').selectFile([`cypress/downloads/${fileName}`,`cypress/downloads/${fileName}2`])
    * {action; 'drag-drop'} will give you option to drag the file into upload area
    * cy.get('#file_upload').selectFile(`cypress/downloads/${fileName}`, {action:'drag-drop'})
    */


    /**
     * cy.on('uncaught:exeception,() =>
     * return false;)
     */
     


})
    
})
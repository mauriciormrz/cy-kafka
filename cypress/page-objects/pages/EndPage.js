const MESSAGE_TEXT = '.message-text'

export default class EndPage {
  
    static seeLogoutText() {
        cy.get(MESSAGE_TEXT).should('contain','You have been logged out.');
    }
}
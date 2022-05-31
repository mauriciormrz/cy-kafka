const SIGN_IN_DROP_DOWN_LINK = '#dropdown-cutom >p'
const ACCEPT_COOKIES_STRING = 'button#onetrust-accept-btn-handler'
const WELCOME_TEXT = '.welcome-title'
const SIGN_OUT_BUTTON ='[data-testid="qa-signout"]'

export default class Navbar {

  static clickSignIn() {
    cy.get(SIGN_IN_DROP_DOWN_LINK).click()
  }

  static clickAcceptCookies() {
    cy.clickIfElemExists(ACCEPT_COOKIES_STRING);
  }

  static welComeHomePage() {
    cy.get(SIGN_IN_DROP_DOWN_LINK).trigger('mouseover');
    cy.get(WELCOME_TEXT).should('contain', 'Welcome')
  }

  static logout() {
    cy.get(SIGN_IN_DROP_DOWN_LINK).trigger('mouseover');
    cy.get(SIGN_OUT_BUTTON).click();
  }

}


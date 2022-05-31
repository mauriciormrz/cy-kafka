import BasePage from '../../../page-objects/BasePage'

const USERNAME_INPUT = '#loginUsername'
const PASSWORD_INPUT = '#loginPassword'
const CONTINUE_BUTTON = '#continue-btn'
const SIGN_IN_BUTTON = '#login-btn'


export default class Login extends BasePage {

    static visit() {
        cy.visit(Cypress.env('STOREFRONT_URL') + "/us/en/", {
            auth: {
                username: Cypress.env('AUTH0_USERNAME'),
                password: Cypress.env('AUTH0_PASSWORD')
            }
        })
    }

    static fillUsername(username) {
        cy.get(USERNAME_INPUT).type(username)
        cy.get(CONTINUE_BUTTON).click()
    }

    static fillPassword(password) {
        cy.get(PASSWORD_INPUT).type(password)
    }

    static clickSignIn() {
        cy.get(SIGN_IN_BUTTON).click()
    }
}

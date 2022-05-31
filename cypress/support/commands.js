// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


Cypress.Commands.add('isVisible', selector => {
  cy.get(selector).should('be.visible')
})

Cypress.Commands.add('isHidden', selector => {
  cy.get(selector).should('not.exist')
})

Cypress.Commands.add('setResolution', size => {
  if (Cypress._.isArray(size)) {
    cy.viewport(size[0], size[1])
  } else {
    cy.viewport(size)
  }
})

Cypress.Commands.add('clickIfElemExists', (elem) => {

  cy.wait(1000);
  cy.get('body').then($body => {
    if ($body.find(elem).length > 0) {
      cy.get(elem).should('be.visible').click();
    }
  });
})




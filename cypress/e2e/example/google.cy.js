/// <reference types="cypress" />

describe(`Let's test Google search`, () => {
  beforeEach(() => {
    cy.visit("https://google.com")
  })

  it(`should have title "Google"`, () => {
    cy.get('title')
      .should('have.text', 'Google')
  })

  it(`should have search input`, () => {
    cy.get('[name=q]')
      .should('be.visible')
  })

  it(`should give results on "cypress io" search request`, () => {
    cy.get('[name=q]')
      .type('cypress io').should('have.value', 'cypress io')
      .type('{enter}')
    cy.get('#search a')
      .and('have.attr', 'href', 'https://www.cypress.io/')
  })

  it(`should navgate to cypress web site`, () => {
    cy.get('[name=q]')
      .type('cypress io').should('have.value', 'cypress io')
      .type('{enter}')
    cy.get('#search a')
      .and('have.attr', 'href', 'https://www.cypress.io/')

    cy.get('a[href="https://www.cypress.io/"]')
      .click()

    cy.origin('https://www.cypress.io/', () => {
      cy.get('title')
        .contains('JavaScript Web Testing and Component Testing Framework')
    })
  })
})
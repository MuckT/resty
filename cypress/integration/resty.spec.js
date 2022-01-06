/// <reference types="cypress" />

describe('Given RESTy', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('')
  })

  describe('When initial app load', () => {
    it('Then should display header', () => {
      cy.get('h1').should('have.text', 'RESTy')
    })
  })

  describe('When Submitting Form', () => {
    it('should work on a GET request', () => {
      cy.intercept('GET', 'https://pokeapi.co/api/v2/', {
        statusCode: 200,
        body: {
          name: 'Peter Pan',
        },
      })
      cy.get('#testFormUrlInput').type('https://pokeapi.co/api/v2/')
      cy.get('.input-group > .btn').click()
      cy.get('#results').should('be.visible').and('contain.text', 'Peter Pan')
    })
  
    it('should work on a POST request', () => {
      // Intercept Request setup
      cy.intercept('POST', 'https://pokeapi.co/api/v2/', {
        statusCode: 200,
        body: {
          name: 'Added Item',
        },
      })
      // Type in form
      cy.get('#testFormUrlInput').type('https://pokeapi.co/api/v2/')
      // Select POST
      cy.get('[for="radio-1"]').click()
      // Click Submit
      cy.get('Form').submit()
      // Assert
      cy.get('#results').should('be.visible').and('contain.text', 'Added Item')
    })
  })
})

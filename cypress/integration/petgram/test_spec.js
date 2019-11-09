/* global cy */

describe('Petgram', () => {

	it('está funcionando', () => {
		cy.visit('/')
	})

	it('permite navegar a una categoría y ver fotografías', () => {
		cy.visit('/pet/1')
		cy.get('article')
	})

	it('permite navegar mediante navbar hasta la "home" de la app', () => {
		cy.visit('/pet/1')
		cy.get('nav a').first().click()
		cy.url().should('be', '/')
	})

})
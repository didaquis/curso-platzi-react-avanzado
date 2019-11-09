/* global cy */

describe('Petgram', () => {

	it('está funcionando', () => {
		cy.visit('/')
	})

	it('permite navegar a una categoría y ver fotografías', () => {
		cy.visit('/pet/1')
		cy.wait(25)
		cy.get('article')
	})

	it('permite navegar mediante navbar hasta la "home" de la app', () => {
		cy.visit('/pet/1')
		cy.wait(25)
		cy.get('nav a').first().click()
		cy.url().should('include', '/')
	})

	it('muestra el formulario de registro e inicio de sesión a los usuarios no autenticados cuando navegan a "favs"', () => {
		cy.visit('/favs')
		cy.get('form', { time: 100 }).should('have.length', 2)
	})

	it('permite registrarse, iniciar la sesión y cerrar la sesión de usuario', () => {
		cy.visit('/favs')

		cy.get('form:first-of-type', { time: 100 }).within(() => {
			cy.randomEmail().then( (randomEmail) => { // using a custom command!
				cy.get('input:first-of-type').type(randomEmail)
				cy.get('input[type="password"]').type('example123')
				cy.wait(250)
				cy.get('button').click()
			})
		})

		cy.wait(3000)
		cy.url().should('include', '/') // check if we are loged

		cy.visit('/user')
		cy.wait(3000)
		cy.get('button').click() // logout
	})

})
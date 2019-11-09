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


/* global Cypress */

/**
 * Generate a pseudo random email address (only leters)
 * @return {String}                Example: 'jusyhamk@euyia.com'
 */
Cypress.Commands.add('randomEmail', () => {
	const validChars = 'abcdefghijklmnopqrstuvwxyz'

	let randomName = ''
	const lengthOfName = 8
	for (let i = 0; i < lengthOfName; i++) {
		randomName += validChars.charAt(Math.floor(Math.random() * validChars.length))
	}

	let randomDomain = ''
	const lengthOfDomain = 5
	for (let i = 0; i < lengthOfDomain; i++) {
		randomDomain += validChars.charAt(Math.floor(Math.random() * validChars.length))
	}

	const fakeEmail = `${randomName}@${randomDomain}.com`
	return fakeEmail
})

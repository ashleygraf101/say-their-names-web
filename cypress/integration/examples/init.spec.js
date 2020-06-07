it('visits the app', () => {
  cy.visit('https://saytheirname.netlify.app/')
})

it('displays list of victims', () => {
  cy.wait(3000)
  cy.get('.profile-preview-container')
    .should('have.length', 12)
})

it('find Jamel Floyd', () => {
  cy.get('[alt="Jamel Floyd"]')
    .should('have.length', 1)
})

it('click Jamel Floyd', () => {
  cy.get('[alt="Jamel Floyd"]').click()
})


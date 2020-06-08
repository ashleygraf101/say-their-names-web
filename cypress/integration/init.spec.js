it('visits the app', () => {
  cy.visit('https://saytheirname.netlify.app/')
})

it('displays list of 12 victims on the home page', () => {
  cy.wait(3000)
  cy.get('.profile-preview-container')
    .should('have.length', 12)
})

it('find Jamel Floyd + verify that alt tags exist', () => {
  cy.get('[alt="Jamel Floyd"]')
    .should('have.length', 1)
})

it('click Jamel Floyd', () => {
  cy.get('[alt="Jamel Floyd"]').click()
})

it("click link to Jamel Floyd's justice fund",  () => {
  cy.get('[type="button"]:first').click({ force: true })
  cy.get('h2:first')
  .should('contain.text', 'Donate')
}) 


it('404 appears for bad routes', () => {
  cy.visit('https://saytheirname.netlify.app/some/bad/route')
  cy.get('h1')
  	.should('have.text', '404')
})
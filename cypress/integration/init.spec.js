it('visits the app', () => {
  cy.visit('https://saytheirname.netlify.app/')
})

it('displays list of 12 victims on the home page', () => {
  cy.wait(3000)
  cy.get('.profile-preview-container')
    .should('have.length', 12)
})

describe('User Story 1', () => {
  it('find first victim on page and donate to their fund', () => {
    cy.visit('https://saytheirname.netlify.app/')
    cy.get('.profile-preview-container').eq(0).click({ force: true })
    cy.get('[type="button"]:first').click({ force: true })
    cy.get('button').eq(1)
    .should('contain.text', 'DONATE NOW')
    cy.get('button').eq(1).click({ force: true })
    cy.url().should('not.contain', 'saytheirnames')
  }) 
});

it('Tabs appear on donations page', () => {
  cy.visit('https://saytheirname.netlify.app/donations')
  cy.get('nav > a').eq(1)
    .should('have.text', 'Victims')
})

it('404 appears for bad routes', () => {
  cy.visit('https://saytheirname.netlify.app/some/bad/route')
  cy.get('h1')
  	.should('have.text', '404')
})


it('404 appears for bad routes - donations', () => {
  cy.visit('https://saytheirname.netlify.app/donations/aaa')
  cy.get('h1')
    .should('have.text', '404')
})

it('404 appears for bad routes - petitions', () => {
  cy.visit('https://saytheirname.netlify.app/petitions/aaa')
  cy.get('h1')
    .should('have.text', '404')
})

it('404 appears for bad routes - profile', () => {
  cy.visit('https://saytheirname.netlify.app/profile/aaa')
  cy.get('h1')
    .should('have.text', '404')
})
describe('home page functions', () => {

  it('successfully loads', () => {
    cy.visit('/')
    cy.title().should('eq', 'Home | Say Their Names')
  })


  it('displays list of 12 victims on the home page', () => {
    cy.wait(3000)
    cy.get('.profile-preview-container')
      .should('have.length', 12)
  })

  it('go to second page', () => {
    cy.wait(3000)
    cy.get('a[role="button"]')
      .contains('2').click()
    cy.get('a[role="button"]')
      .contains('2').click()
  })  

  it('find first victim on page and ', () => {
    cy.get('.profile-preview-container').eq(0).click({ force: true })
    cy.get('[type="button"]:first').click({ force: true })
  }) 

  it('share their fund', () => {
    cy.contains('DONATE NOW').click({ force: true })
  }) 

  it('share their story', () => {
    cy.contains('Twitter').click()
    cy.contains('#').click()
  }) 

});

describe('donations page', () => {

  it("find Victims tab", () => {
    cy.visit('/donations')
    cy.contains('Victims').click({ force: true })
  })

  it("check there are twelve items on the list", () => {
    cy.get('p').eq(12)
      .should('have.text', 'VICTIMS')
    cy.contains('FIND OUT MORE').click()
  })

  it('Tabs appear on donations page', () => {
    cy.visit('/donations')
    cy.get('nav > button').eq(1)
      .should('have.text', 'Victims')
  })

})



describe('Refresh pagination on tabs', () => {

  it.skip('petitions page', () => {
    cy.visit('/petitions')
    cy.get('nav > button').eq(1)
      .should('have.text', 'Victims')
    cy.get('nav > button').eq(3).click({ force: true })
    cy.contains('Page 1')
  })

  it.skip('donations page', () => {
    cy.visit('/donations')
    cy.get('nav > button').eq(1)
      .should('have.text', 'Victims')
    cy.get('nav > button').eq(3).click({ force: true })
    cy.get('a[role="button"]')
      .contains('Page 1')
  })

})


describe('404 appears for bad routes', () => {
  it.skip('donations', () => {
    cy.visit('/donations/aaa')
    cy.get('h1')
      .should('have.text', '404')
  })

  it.skip('petitions', () => {
    cy.visit('/petitions/aaa')
    cy.get('h1')
      .should('have.text', '404')
  })

  it.skip('profile', () => {
    cy.visit('/profile/aaa')
    cy.get('h1')
      .should('have.text', '404')
  })

  it.skip('random url', () => {
    cy.visit('/some/bad/route')
    cy.get('h1')
      .should('have.text', '404')
  })

})
describe('Sidebar Navigation Test Suite', () => {

  beforeEach(() => {

    // Step 1: Login
    cy.visit('https://devflexi.siyothsoft.com/login')

    cy.get('input[placeholder="Enter your username"]')
      .type('fl01')

    cy.get('input[placeholder="Enter your password"]')
      .type('123456')

    cy.get('button[type="submit"]').click()

    // Wait for dashboard
    cy.url().should('include', '/dashboard', { timeout: 10000 })

    // Step 2: Go to Jobs page
    cy.visit('https://devflexi.siyothsoft.com/jobs')

  })
   


  it('should open sidebar and navigate to Machine dashboard', () => {

    // Step 3: Open sidebar (hamburger menu)
    cy.get('.navbar__hamburger', { timeout: 10000 })
      .click()

    // Step 4: Verify sidebar is visible
    cy.get('.sidebar').should('be.visible')

    // Step 5: Check Machine exists
    cy.contains('Machine').should('be.visible')

    // Step 6: Click Machine
    cy.contains('Machine').click()

    // Step 7: Verify navigation success
    cy.contains('Machine View', { timeout: 10000 }).should('be.visible')

  })
  it('cick the view button and check details are visibel',()=>{

    cy.visit('https://devflexi.siyothsoft.com/machines')

     cy.contains('button', 'View').should('be.visible') .click()
      // Verify table is visible
    cy.get('table', { timeout: 10000 }).should('be.visible')

    // Verify important table content
    cy.contains('Machine Id').should('be.visible')
    })
    

})
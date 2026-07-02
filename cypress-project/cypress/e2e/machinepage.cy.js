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
    cy.get('table.data-table', { timeout: 10000 }).should('be.visible')

    // Verify important table content
    cy.contains('Machine Id').should('exist').and('be.visible')
    })
    it('check input feild are working fill input feild  then click view button',()=>{
    
    cy.visit('https://devflexi.siyothsoft.com/machines')
    cy.get('input.input').first().type('M1')
    cy.contains('button', 'View').should('be.visible') .click()
    
    })
    it('give valude all input feild and click view button',()=>{
      cy.visit('https://devflexi.siyothsoft.com/machines')
      cy.get('input.input').first().type('M1')
      cy.get('select.form-select').eq(0).should('be.visible').select('G')

      cy.contains('button', 'View').should('be.visible') .click()
    })
    it('give valude all input feild and click view button',()=>{
      cy.visit('https://devflexi.siyothsoft.com/machines')
      cy.get('input.input').first().type('P3')
      cy.get('select.form-select').eq(0).should('be.visible').select('Y')

      cy.contains('button', 'View').should('be.visible') .click()
    })
    it('click next button then navigate next page',()=>{
      cy.visit('https://devflexi.siyothsoft.com/machines')
      cy.contains('button', 'View').click()
      cy.contains('button', 'Next', { timeout: 10000 }).should('be.visible').click()
      cy.url().should('include', '/machines')
    })
    it('click previous button then navigate previous page',()=>{
      cy.visit('https://devflexi.siyothsoft.com/machines')
      cy.contains('button', 'View').click()
      cy.contains('button', 'Next', { timeout: 10000 }).should('be.visible').click()
      cy.contains('button', 'Prev', { timeout: 10000 }).should('be.visible').click()
      cy.url().should('include', '/machines')
    })
    it('give input value input feild  then click view button and after click rest button',()=>{

       cy.visit('https://devflexi.siyothsoft.com/machines')
        cy.get('input.input').type('FB1')
       cy.get('select.form-select').should('be.visible').select('G')
       cy.contains('button', 'View').should('be.visible') .click()
       cy.contains('button', 'Reset').should('be.visible').click()
       cy.get('input.input').should('have.value', '')
       cy.get('select.form-select').should('have.value','')
      
    })
    it('fill one input feild',()=>{
     cy.visit('https://devflexi.siyothsoft.com/machines')
      cy.get('select.form-select').should('be.visible').select('G')
      cy.contains('button','View').should('be.visible').click()
      cy.get('table.data-table', { timeout: 10000 }).should('be.visible')
      cy.contains('Model').should('exist').and('be.visible')



    })
    it('click the add button check form should be visible',()=>{

      cy.visit('https://devflexi.siyothsoft.com/machines')
      cy.contains('button', 'Add').should('be.visible') .click()
      cy.get('form.machine-detail__form').should('be.visible')
      
      
      
    })
    it('check the input feild are working fill input feild and click  cancel button',()=>{

       cy.visit('https://devflexi.siyothsoft.com/machines')
      cy.contains('button', 'Add').should('be.visible') .click()
      cy.get('form.machine-detail__form').should('be.visible')
      cy.get('form.machine-detail__form input').first().type('M7')
      cy.get('form.machine-detail__form select.form-select').eq(0).should('be.visible').select('10')
      cy.get('form.machine-detail__form select.form-select').eq(1).should('be.visible').select('12')
      cy.get('form.machine-detail__form select.form-select').eq(2).should('be.visible').select('D2')
      cy.contains('button', 'Close').should('be.visible') .click()
    })
    it('check the input feild are working fill input feild and click  undo button',()=>{
      cy.visit('https://devflexi.siyothsoft.com/machines')
      cy.contains('button', 'Add').should('be.visible') .click()
      cy.get('form.machine-detail__form input').first().type('M7')
      cy.get('form.machine-detail__form select.form-select').eq(0).should('be.visible').select('10')
      cy.get('form.machine-detail__form select.form-select').eq(1).should('be.visible').select('12')
      cy.get('form.machine-detail__form select.form-select').eq(2).should('be.visible').select('D2')
      cy.contains('button','Undo').should('be.visible') .click()
      cy.get('form.machine-detail__form input').first().should('have.value', '')
      cy.get('form.machine-detail__form select.form-select').eq(0).should(($el) => { expect($el[0].selectedIndex).to.equal(0) })
      cy.get('form.machine-detail__form select.form-select').eq(1).should(($el) => { expect($el[0].selectedIndex).to.equal(0) })
      cy.get('form.machine-detail__form select.form-select').eq(2).should(($el) => { expect($el[0].selectedIndex).to.equal(0) })
    })
    it('check the input feild are working fill input feild and click  save button',()=>{
       cy.visit('https://devflexi.siyothsoft.com/machines')
       cy.contains('button', 'Add').should('be.visible') .click()
      cy.get('form.machine-detail__form').should('be.visible')
      cy.get('form.machine-detail__form input').first().type('M7')
      cy.get('form.machine-detail__form select.form-select').eq(0).should('be.visible').select('10')
      cy.get('form.machine-detail__form select.form-select').eq(1).should('be.visible').select('12')
      cy.get('form.machine-detail__form select.form-select').eq(2).should('be.visible').select('D2')
      cy.contains('button', 'Save').should('be.visible').click()
      
       
    }) 
   

  
  })


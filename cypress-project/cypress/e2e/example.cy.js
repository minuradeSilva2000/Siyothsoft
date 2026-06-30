describe('Add New Job Form Test Suite', () => {

  beforeEach(() => {
    cy.visit('https://devflexi.siyothsoft.com/jobs')

    
    cy.contains('Add ').click()
  })

  it('should load Add New Job form successfully', () => {
    cy.contains('Add New Job').should('be.visible')
    cy.get('input').should('exist')
  })

  it('should validate Job No field', () => {
    cy.get('input[name="jobNo"]').clear()
    cy.get('form').submit()

    cy.contains(/required|invalid/i).should('be.visible')
  })

  it('should fill Job basic details', () => {
    cy.get('input[name="jobNo"]').type('JOB-001')
    cy.get('input[name="parentJobNo"]').type('P-100')
    cy.get('input[name="po"]').type('PO-2026-01')

    cy.get('textarea[name="description"]').type('Test automation job creation')

    cy.get('input[name="unitPrice"]').type('1500')
    cy.get('input[name="quantity"]').type('10')
  })

  it('should select Item and click Populate', () => {
    cy.get('select[name="item"]').select(1)
    cy.contains('Populate').click()

    cy.get('input[name="unitPrice"]').should('have.value', '1500')
  })

  it('should select Print Type and Customer', () => {
    cy.get('select[name="printType"]').select(1)
    cy.get('select[name="customer"]').select(1)
  })

  it('should check checkboxes (Graphics Ready, Pyramid Attach, etc)', () => {
    cy.get('input[type="checkbox"]').check({ force: true })
  })

  it('should enter dates correctly', () => {
    cy.get('input[name="jobDate"]').type('2026-06-25')
    cy.get('input[name="deliveryDate"]').type('2026-06-30')
    cy.get('input[name="graphicsReadyDate"]').type('2026-06-28')
    cy.get('input[name="plateReadyDate"]').type('2026-06-29')
    cy.get('input[name="actualDate"]').type('2026-06-25')
  })

  it('should calculate Area field (read only check)', () => {
    cy.get('input[name="length"]').type('10')
    cy.get('input[name="width"]').type('5')

    cy.get('input[name="area"]').should('not.be.enabled')
  })

  it('should save job successfully', () => {
    cy.get('input[name="jobNo"]').type('JOB-002')
    cy.get('input[name="description"]').type('Automation Test Job')

    cy.get('button').contains('Save').click()

    cy.contains(/success|saved|created/i).should('be.visible')
  })

  it('should close modal', () => {
    cy.get('button').contains('Close').click()

    cy.contains('Add New Job').should('not.be.visible')
  })

})
//navbar__hamburger
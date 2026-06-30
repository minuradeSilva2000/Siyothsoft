describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://devflexi.siyothsoft.com')
  })
})

describe(' check Login Tests after navigate dashbord', () => {

  it('Should login with valid credentials', () => {

    cy.visit('https://devflexi.siyothsoft.com/login')

    cy.get('input[placeholder="Enter your username"]').type('fl01')
    cy.get('input[placeholder="Enter your password"]').type('123456')

    cy.get('button[type="submit"]').click()

    cy.url().should('include', '/dashboard')
  })
  

})


describe('Login Tests', () => {

  it('check input invalid password', () => {

    cy.visit('https://devflexi.siyothsoft.com/login')

    cy.get('input[placeholder="Enter your username"]').type('fl01')
    cy.get('input[placeholder="Enter your password"]').type('1234')

    cy.get('button[type="submit"]').click()

    cy.url().should('include', '/login')
  })

})
describe('Invalid login',() =>{
  
  it('Should error for invalid password ', () => {

    cy.visit('https://devflexi.siyothsoft.com/login')

    cy.get('input[placeholder="Enter your username"]').type('ghl0647')
    cy.get('input[placeholder="Enter your password"]').type('123456')
    
    cy.get('button[type="submit"]').click()

    cy.url().should('include', '/login')
  })
  

})

  








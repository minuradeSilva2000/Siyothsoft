describe('debug', () => {
  it('checks pagination', () => {
    cy.visit('https://devflexi.siyothsoft.com/login');
    cy.get('input[placeholder="Enter your username"]').type('fl01');
    cy.get('input[placeholder="Enter your password"]').type('123456');
    cy.get('button[type=\"submit\"]').click();
    cy.url().should('include', '/dashboard', { timeout: 10000 });
    cy.visit('https://devflexi.siyothsoft.com/machines');
    cy.wait(3000);
    cy.get('body').then(() => {
      cy.log(.html());
    });
    cy.document().then((doc) => {
      const buttons = doc.querySelectorAll('button');
      cy.log('Buttons found: ' + buttons.length);
      buttons.forEach((b, i) => cy.log('button ' + i + ': \"' + b.innerText.trim() + '\"'));
    });
  });
});
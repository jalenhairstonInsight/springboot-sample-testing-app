describe('template spec', () => {

  /* ==== Test Created with Cypress Studio ==== */
  it('Create Employee', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('localhost:3002/new');
    cy.get('#name').clear({force: true});
    cy.get('#name').type('Jalen', {force: true});
    cy.get('#email').clear({force: true});
    cy.get('#email').type('jalen.hairston@test.com', {force: true});
    cy.get('#workEmailYes').check({force: true});
    cy.get('#monthsEmployed').clear({force: true});
    cy.get('#monthsEmployed').type('3', {force: true});
    cy.get('#confirmSubmit').check({force: true});
    cy.get('button').click();
    /* ==== End Cypress Studio ==== */
  });
})
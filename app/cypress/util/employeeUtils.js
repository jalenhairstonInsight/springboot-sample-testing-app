

export default class employeeUtils {
    static visitCreateEmployeePage() {
        cy.visit("http://localhost:3002/new")
    }

    static fillNameFieldCorrectly() {
        cy.get('#name').clear({force: true});
        cy.get('#name').type('Jalen', {force: true});
    }

    static fillNameFieldIncorrectly() {
        cy.get('#name').clear({force: true});
    }

    static fillEmailFieldCorrectly() {
        cy.get('#email').clear({force: true});
        cy.get('#email').type('jalen.hairston@test.com', {force: true});
    }

    static fillEmailFieldIncorrectly() {
        cy.get('#email').clear({force: true});
        cy.get('#email').type('jalen.hairston@test', {force: true});
    }

    static fillEmailTypeFieldCorrectly() {
        cy.get('#isWorkEmail').check({force: true});
    }

    static fillEmailTypeFieldIncorrectly() {
    }

    static fillMonthsEmployedFieldCorrectly() {
        cy.get('#monthsEmployed').clear({force: true});
        cy.get('#monthsEmployed').type('3', {force: true});
    }

    static fillMonthsEmployedFieldIncorrectly() {
        cy.get('#monthsEmployed').clear({force: true});
        cy.get('#monthsEmployed').type('0', {force: true});
    }

    static confirmWantToSubmit() {
        cy.get('#confirmSubmit').check({force: true});
    }

    static assertSubmitEnabled() {
        cy.get('button').should('be.enabled');
        cy.get('button').click();
    }

    static assertSubmitDisabled() {
        cy.get('button').should('be.disabled')
            .and('not.be.enabled');
    }

    static visitUpdateEmployeePage(id) {
        cy.visit("http://localhost:3002/" + id)
    }

}
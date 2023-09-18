

export default class employeeUtils {

    static employeeInfo = {
        name: 'Jalen Hairston',
        email: 'jalen.hairston@test.com',
        monthsEmployed: '3',
        incorrectEmail: 'jalen.hairston@test',
        incorrectMonthsEmployed: '0',
        MAX_EMPLOYEES: '1000'
    }

    static visitCreateEmployeePage() {
        cy.visit('http://localhost:3002/new')
    }

    static fillNameFieldCorrectly() {
        cy.get('#name').clear({force: true});
        cy.get('#name').type(this.employeeInfo.name, {force: true});
    }

    static fillNameFieldIncorrectly() {
        cy.get('#name').clear({force: true});
    }

    static fillEmailFieldCorrectly() {
        cy.get('#email').clear({force: true});
        cy.get('#email').type(this.employeeInfo.email, {force: true});
    }

    static fillEmailFieldIncorrectly() {
        cy.get('#email').clear({force: true});
        cy.get('#email').type(this.employeeInfo.incorrectEmail, {force: true});
    }

    static fillEmailTypeFieldCorrectly() {
        cy.get('#isWorkEmail').check({force: true});
    }

    static doNothing() {
    }

    static fillMonthsEmployedFieldCorrectly() {
        cy.get('#monthsEmployed').clear({force: true});
        cy.get('#monthsEmployed').type(this.employeeInfo.monthsEmployed, {force: true});
    }

    static fillMonthsEmployedFieldIncorrectly() {
        cy.get('#monthsEmployed').clear({force: true});
        cy.get('#monthsEmployed').type(this.employeeInfo.incorrectMonthsEmployed, {force: true});
    }

    static confirmWantToSubmit() {
        cy.get('#confirmSubmit').check({force: true});
    }

    static assertSubmitEnabled() {
        cy.get('#submitButton').should('be.enabled');
        cy.get('#submitButton').click();
    }

    static assertSubmitDisabled() {
        cy.get('#submitButton').should('be.disabled')
            // .and('not.be.enabled');
    }

    //UPDATE

    static visitUpdateEmployeePage() {
        cy.get('#numEntriesPerPage').clear({force: true});
        cy.get('#numEntriesPerPage').invoke('val', '').clear({force: true}).type(this.employeeInfo.MAX_EMPLOYEES, {force: true}).blur()
        cy.get('#employeeDiv0').click({force: true})
    }

    static checkName() {
        cy.get('#name').should('have.value', this.employeeInfo.name)
    }

    static checkEmail() {
        cy.get('#email').should('have.value', this.employeeInfo.email)
    }

    static checkMonthsEmployed() {
        cy.get('#monthsEmployed').should('have.value', this.employeeInfo.monthsEmployed)
    }

    static deleteEmployee() {
        cy.get('#deleteButton').click({force: true})
    }

    static assertEmployeeIsDeleted() {
//Code to test response
    }

    static visitEmployeeListPage() {
        cy.intercept('GET', '/employees').as('employees')
        cy.visit('http://localhost:3002/employees')
        cy.wait('@employees')
    }

    static setNumEntries(num) {
        cy.get('#numEntriesPerPage').clear({force: true});
        cy.get('#numEntriesPerPage').invoke('val', '').clear({force: true}).type(num, {force: true}).blur()
    }

    static assertNumEntriesShown(num) {
        cy.get('.employeeDiv').should('have.length', num)
    }

    static assertNextPageButtonStatus(status) {
        cy.get('#employeeNextCaret')
    }

    static deleteAllEmployees() {
        let numEmployees
        cy.get('#numEntriesPerPage').invoke('val', '').clear({force: true}).type(this.employeeInfo.MAX_EMPLOYEES, {force: true}).blur()
        cy.get('.employeeDiv').then(($elementList) => {
            console.log($elementList.get().length)
            numEmployees = $elementList.get().length
            for (let i = 0; i < numEmployees; i++) {
                this.visitUpdateEmployeePage()
                this.deleteEmployee()
                this.visitEmployeeListPage()
            }

        })
        console.log(numEmployees)
        return numEmployees


    }

    static assertEmptyListMessageIsShown() {
        cy.get("#emptyListMessage").should("be.visible")
    }
}
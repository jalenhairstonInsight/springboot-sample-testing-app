import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";
import employeeUtils from "../../util/employeeUtils"

Given("I am on the Create Employee Form page", () => {
    employeeUtils.visitCreateEmployeePage()
})

When("I fill in the Name field correctly", () => {
    employeeUtils.fillNameFieldCorrectly()
})

When("I fill in the Email field correctly", () => {
    employeeUtils.fillEmailFieldCorrectly()
})

When("I select the Email Type field correctly", () => {
    employeeUtils.fillEmailTypeFieldCorrectly()
})

When("I fill in the Months Employed field correctly", () => {
    employeeUtils.fillMonthsEmployedFieldCorrectly()
})

When("I confirm I want to submit the form", () => {
    employeeUtils.confirmWantToSubmit()
})

Then("I can submit the form", () => {
    employeeUtils.assertSubmitEnabled()
})

// Then("The form creates an Employee", () => {
//
// })

When("I fill in the Name field incorrectly", () => {
    employeeUtils.fillNameFieldIncorrectly()
})

Then("I cannot submit the form", () => {
    employeeUtils.assertSubmitDisabled()
})

When("I fill in the Email field incorrectly", () => {
    employeeUtils.fillEmailFieldIncorrectly()
})

When("I do not select the Email Type field", () => {
    employeeUtils.doNothing()
})

When("I fill in the Months Employed field incorrectly", () => {
    employeeUtils.fillMonthsEmployedFieldIncorrectly()
})

When("I do not confirm I want to submit the form", () => {
    employeeUtils.doNothing()
})

Given("I have created Employee 1", () => {
    employeeUtils.visitCreateEmployeePage()
    employeeUtils.fillNameFieldCorrectly()
    employeeUtils.fillEmailFieldCorrectly()
    employeeUtils.fillEmailTypeFieldCorrectly()
    employeeUtils.fillMonthsEmployedFieldCorrectly()
    employeeUtils.confirmWantToSubmit()
    employeeUtils.assertSubmitEnabled()
})

When("I navigate to the Update Employee 1 Form page", () => {
    employeeUtils.visitUpdateEmployeePage()
})

Then("The name field is pre-filled with Employee 1's name", () => {
    employeeUtils.checkName()
})

Then("The email field is pre-filled with Employee 1's email", () => {
    employeeUtils.checkEmail()
})

Then("The months employed field is pre-filled with Employee 1's months employed", () => {
    employeeUtils.checkMonthsEmployed()
})

Then("I cannot submit the form", () => {
    employeeUtils.assertSubmitDisabled()
})

Given("I am on the Update Employee 1 Form page", () => {
    employeeUtils.visitUpdateEmployeePage()
})


//Delete

When("I press the Delete Employee button", () => {
    employeeUtils.deleteEmployee()
})

Then("The Employee is deleted", () => {
    employeeUtils.assertEmployeeIsDeleted()
})


//Multiple

Given("I have created {int} Employees", (numToCreate) => {
    for (let i = 0; i < numToCreate; i++) {
        employeeUtils.visitCreateEmployeePage()
        employeeUtils.fillNameFieldCorrectly()
        employeeUtils.fillEmailFieldCorrectly()
        employeeUtils.fillEmailTypeFieldCorrectly()
        employeeUtils.fillMonthsEmployedFieldCorrectly()
        employeeUtils.confirmWantToSubmit()
        employeeUtils.assertSubmitEnabled()
    }
})
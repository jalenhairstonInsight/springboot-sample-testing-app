import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";
import employeeForm from "../../../src/parts/EmployeeForm";
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

When("I select the Email Type field incorrectly", () => {
    employeeUtils.fillEmailTypeFieldIncorrectly()
})

When("I fill in the Months Employed field incorrectly", () => {
    employeeUtils.fillMonthsEmployedFieldIncorrectly()
})
//UPDATE

Given("I have created an Employee", () => {
    employeeUtils.visitCreateEmployeePage()
    employeeUtils.fillNameFieldCorrectly()
    employeeUtils.fillEmailFieldCorrectly()
    employeeUtils.fillEmailTypeFieldCorrectly()
    employeeUtils.confirmWantToSubmit()
    employeeUtils.assertSubmitEnabled()
})

Given("I am on the Update Employee Form page", () => {
    employeeUtils.visitUpdateEmployeePage()
})



import {Given, When, Then, Before} from "cypress-cucumber-preprocessor/steps";
import employeeUtils from "../../util/employeeUtils";

Before(() => {
    employeeUtils.deleteEmployeesAtOnce();
})

Given("I am on the Employee List page", () => {
    employeeUtils.visitEmployeeListPage()
})

When("I select to show {int} entries", (numSelectedToShow) => {
    employeeUtils.setNumEntries(numSelectedToShow)
})



Then("The Employee List shows {int} out of {int} entries", (numToShow, numCreated) => {
    if (numToShow > numCreated) {
        numToShow = numCreated
    }
    employeeUtils.assertNumEntriesShown(numToShow)
})

Then("The next page button is {string}", (status) => {
    employeeUtils.assertNextPageButtonStatus(status)
})

When("I delete all Employees", () => {
    employeeUtils.deleteAllEmployees()
})

Then("There are no employees to display", () => {
    employeeUtils.assertNumEntriesShown(0)
})

Then("An appropriate message is shown", () => {
    employeeUtils.assertEmptyListMessageIsShown()
})
import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";

Given("I am on the Create Employee Form page", () => {
    cy.visit("http://localhost:3002/new")

})
@updateEmployee
Feature: Update Employee

  Background: Assuming environment is up and running

  Scenario: Verify Employee record exists and is updated correctly in database
    Given I am an authorized user
    And I request to create Employee 1
    When I request to update Employee 1
    Then The Employee is updated
    And The fields and values of the last Employee are the same as update Request 1

  Scenario: Verify Employee record does not exist and do not update
    Given I am an authorized user
    When I request to update Employee 1
    Then The Employee is not updated

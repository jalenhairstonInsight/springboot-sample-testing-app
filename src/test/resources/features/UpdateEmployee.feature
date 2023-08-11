@updateEmployee
Feature: Update Employee

  Background: Assuming environment is up and running

  Scenario: Verify Employee record exists and is updated correctly in database
    Given Connection to DB is operational
    And I request to create Employee 1
    When I request to update Employee 1
    Then The Employee is updated
    And The fields and values of the last Employee are the same as update Request 1

  Scenario: Verify Employee record does not exist and do not update
    Given Connection to DB is operational
    When I request to update Employee 1
    Then The server errors and Employee is not updated

  Scenario: Verify Employee record exists and incorrect update request does not update
    Given Connection to DB is operational
    And I request to create Employee 1
    When I request to incorrectly update Employee 1
    Then The request is bad and Employee is not updated
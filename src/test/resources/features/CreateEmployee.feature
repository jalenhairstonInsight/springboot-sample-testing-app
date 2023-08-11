@createEmployee
Feature: Create Employee

  Background: Assuming environment is up and running

  Scenario: Verify single Employee record is created correctly in database
    Given Connection to DB is operational
    When I request to create Employee 1
    Then The Employee is created
    And The fields and values of the last Employee are the same as create Request 1

  Scenario: Verify sequential Employee record is created correctly in database
    Given Connection to DB is operational
    And I request to create Employee 1
    When I request to create Employee 2
    Then The Employee is created
    And The fields and values of the last Employee are the same as create Request 2
    And The ID of the newest employee is one greater than the previous ID in the database

  Scenario: Verify incorrect Employee request is not created in database
    Given Connection to DB is operational
    When I request to incorrectly create Employee 1
    Then The employee is not created




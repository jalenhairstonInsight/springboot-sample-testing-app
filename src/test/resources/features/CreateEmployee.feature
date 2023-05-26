@createEmployee
Feature: Create Employee

  Background: Assuming environment is up and running
    Given I request to create an Employee

  Scenario: Verify Employee record is created correctly in database
    When I retrieve info of the newest created Employee
    Then The fields and values of Employee are the same as the one created
    And  The ID of the newest employee is one greater than the previous ID in the database

  Scenario: Verify Employee record is created incorrectly in database
    When I retrieve info of the newest created Employee
    Then The fields and values of Employee are not the same as the one created
    And  The ID of the newest employee is one greater than the previous ID in the database

  Scenario: Verify Employee record is not created in database
    When I retrieve info of the newest created Employee
    Then The fields and values of the Employee are not the same as the one created
    And  The ID of the newest employee is not one greater than the previous ID in the database

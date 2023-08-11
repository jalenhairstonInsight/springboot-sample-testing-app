@deleteEmployee
Feature: Delete Employee

  Background: Assuming environment is up and running

  Scenario: Verify Employee record exists and is deleted correctly in database
    Given Connection to DB is operational
    And I request to create Employee 1
    When I request to delete Employee 1
    Then The Employee is deleted

  Scenario: Verify Employee record does not exist and do not delete
    Given Connection to DB is operational
    When I request to delete Employee 1
    Then The server errors and Employee is not deleted

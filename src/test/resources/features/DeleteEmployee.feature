@deleteEmployee
Feature: Delete Employee

  Background: Assuming environment is up and running

  Scenario: Verify Employee record exists and is deleted correctly in database
    Given I am an authorized user
    And I request to create Employee 1
    When I request to delete Employee 1
    Then The Employee is deleted

  Scenario: Verify Employee record does not exist and do not delete
    Given I am an authorized user
    When I request to delete Employee 1
    Then The Employee is not deleted

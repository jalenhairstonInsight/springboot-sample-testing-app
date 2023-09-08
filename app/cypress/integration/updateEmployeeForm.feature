Feature: Update Employee Form

  Scenario: All Fields filled correctly
    Given I have created Employee 1
    And I am on the Update Employee 1 Form page
    When I fill in the Name field correctly
    And I fill in the Email field correctly
    And I select the Email Type field correctly
    And I fill in the Months Employed field correctly
    And I confirm I want to submit the form
    Then I can submit the form
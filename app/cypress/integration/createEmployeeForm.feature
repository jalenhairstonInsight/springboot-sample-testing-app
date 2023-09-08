Feature: Create Employee Form

  Scenario:  All Fields filled correctly
    Given I am on the Create Employee Form page
    When I fill in the Name field correctly
    And I fill in the Email field correctly
    And I select the Email Type field correctly
    And I fill in the Months Employed field correctly
    And I confirm I want to submit the form
    Then I can submit the form

  Scenario:  Name field filled incorrectly
    Given I am on the Create Employee Form page
    When I fill in the Name field incorrectly
    And I fill in the Email field correctly
    And I select the Email Type field correctly
    And I fill in the Months Employed field correctly
    And I confirm I want to submit the form
    Then I cannot submit the form

  Scenario:  Email field filled incorrectly
    Given I am on the Create Employee Form page
    When I fill in the Name field correctly
    And I fill in the Email field incorrectly
    And I select the Email Type field correctly
    And I fill in the Months Employed field correctly
    And I confirm I want to submit the form
    Then I cannot submit the form

  Scenario:  Email Type field selected incorrectly
    Given I am on the Create Employee Form page
    When I fill in the Name field correctly
    And I fill in the Email field correctly
    And I select the Email Type field incorrectly
    And I fill in the Months Employed field correctly
    And I confirm I want to submit the form
    Then I cannot submit the form

  Scenario:  Months Employed field filled incorrectly
    Given I am on the Create Employee Form page
    When I fill in the Name field correctly
    And I fill in the Email field correctly
    And I select the Email Type field correctly
    And I fill in the Months Employed field incorrectly
    And I confirm I want to submit the form
    Then I cannot submit the form

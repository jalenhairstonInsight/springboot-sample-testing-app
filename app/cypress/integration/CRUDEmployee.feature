Feature: Create Employee Form

  Scenario:  (Create) All Fields filled correctly
    Given I am on the Create Employee Form page
    When I fill in the Name field correctly
    And I fill in the Email field correctly
    And I select the Email Type field correctly
    And I fill in the Months Employed field correctly
    And I confirm I want to submit the form
    Then I can submit the form

  Scenario:  (Create) Name field filled incorrectly
    Given I am on the Create Employee Form page
    When I fill in the Name field incorrectly
    And I fill in the Email field correctly
    And I select the Email Type field correctly
    And I fill in the Months Employed field correctly
    And I confirm I want to submit the form
    Then I cannot submit the form

  Scenario:  (Create) Email field filled incorrectly
    Given I am on the Create Employee Form page
    When I fill in the Name field correctly
    And I fill in the Email field incorrectly
    And I select the Email Type field correctly
    And I fill in the Months Employed field correctly
    And I confirm I want to submit the form
    Then I cannot submit the form

  Scenario:  (Create) Email Type field not selected
    Given I am on the Create Employee Form page
    When I fill in the Name field correctly
    And I fill in the Email field correctly
    And I do not select the Email Type field
    And I fill in the Months Employed field correctly
    And I confirm I want to submit the form
    Then I cannot submit the form

  Scenario:  (Create) Months Employed field filled incorrectly
    Given I am on the Create Employee Form page
    When I fill in the Name field correctly
    And I fill in the Email field correctly
    And I select the Email Type field correctly
    And I fill in the Months Employed field incorrectly
    And I confirm I want to submit the form
    Then I cannot submit the form

    Scenario: (Create) Form confirmation not selected
      Given I am on the Create Employee Form page
      When I fill in the Name field correctly
      And I fill in the Email field correctly
      And I select the Email Type field correctly
      And I fill in the Months Employed field correctly
      And I do not confirm I want to submit the form
      Then I cannot submit the form

  Scenario: (Update) All fields pre-filled correctly
    Given I have created Employee 1
    When I navigate to the Update Employee 1 Form page
    Then The name field is pre-filled with Employee 1's name
    And The email field is pre-filled with Employee 1's email
    And The months employed field is pre-filled with Employee 1's months employed
    And I cannot submit the form

  Scenario: (Update) All Fields filled correctly
    Given I have created Employee 1
    And I am on the Update Employee 1 Form page
    When I fill in the Name field correctly
    And I fill in the Email field correctly
    And I select the Email Type field correctly
    And I fill in the Months Employed field correctly
    And I confirm I want to submit the form
    Then I can submit the form

  Scenario: (Update) Name field filled incorrectly
    Given I have created Employee 1
    And I am on the Update Employee 1 Form page
    When I fill in the Name field incorrectly
    And I fill in the Email field correctly
    And I select the Email Type field correctly
    And I fill in the Months Employed field correctly
    And I confirm I want to submit the form
    Then I cannot submit the form

  Scenario: (Update) Email field filled incorrectly
    Given I have created Employee 1
    And I am on the Update Employee 1 Form page
    When I fill in the Name field correctly
    And I fill in the Email field incorrectly
    And I select the Email Type field correctly
    And I fill in the Months Employed field correctly
    And I confirm I want to submit the form
    Then I cannot submit the form

  Scenario:  (Update) Email Type field selected incorrectly
    Given I have created Employee 1
    And I am on the Update Employee 1 Form page
    When I fill in the Name field correctly
    And I fill in the Email field correctly
    And I do not select the Email Type field
    And I fill in the Months Employed field correctly
    And I confirm I want to submit the form
    Then I cannot submit the form

  Scenario:  (Update) Months Employed field filled incorrectly
    Given I have created Employee 1
    And I am on the Update Employee 1 Form page
    When I fill in the Name field correctly
    And I fill in the Email field correctly
    And I select the Email Type field correctly
    And I fill in the Months Employed field incorrectly
    And I confirm I want to submit the form
    Then I cannot submit the form

  Scenario: (Update) Form confirmation not selected
    Given I have created Employee 1
    And I am on the Update Employee 1 Form page
    When I fill in the Name field correctly
    And I fill in the Email field correctly
    And I select the Email Type field correctly
    And I fill in the Months Employed field correctly
    And I do not confirm I want to submit the form
    Then I cannot submit the form

    Scenario: (Delete) Delete Employee Successfully
      Given I have created Employee 1
      And I am on the Update Employee 1 Form page
      When I press the Delete Employee button
      Then The Employee is deleted

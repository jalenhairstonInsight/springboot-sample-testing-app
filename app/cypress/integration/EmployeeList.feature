Feature: Employee List
  Scenario Outline: Create and View Employee List
    Given I have created <created> Employees
    And I am on the Employee List page
    When I select to show <shown> entries
    Then The Employee List shows <shown> out of <created> entries
    And The next page button is '<status>'

    Examples:
      | created | shown | status   |
      | 3       | 2     | enabled  |
      | 5       | 5     | disabled |
      | 3       | 1     | enabled  |
      | 1       | 1     | disabled |
      | 5       | 8     | disabled |


  Scenario: Deleted last Employee on list
    Given I have created Employee 1
    And I am on the Employee List page
    When I delete all Employees
    Then There are no employees to display
    And An appropriate message is shown


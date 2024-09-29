Feature: Submit Leave
  As an employee
  I want to submit a leave request
  So that I can take time off from work

  Scenario: LEAVE-001: Successful Annual Leave submission
    Given I am logged in as an ESS user
    When I navigate to the leave page through navigation
    And I click the "Apply" button
#     And I fill in the leave request form with valid data
#     And I submit the leave request
#     Then I should see a confirmation message
#     And the leave request should be recorded in the system

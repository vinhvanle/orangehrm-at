# Feature: Submit Leave
# As an employee
# I want to submit a leave request
# So that I can take time off from work

# # Scenario Outline: <TestID>: Successful <leaveType> submission with valid date
# #   Given I am logged in as an ESS user
# #   When I navigate to the leave page through navigation
# #   When I click the "Apply" button in the top bar menu
# #   When I select <leaveType> from the Leave Type dropdown
# #   Then I can see correct remaining <leaveType> balance
# #   When I fill in the <leaveType> request form with valid details
# #   When I submit the leave request
# #   Then I should see a success message displayed
# #   When the user clicks on the logout button
# #   Then the user should be redirected to the login page

# #   Examples:
# #     | TestID    | leaveType    |
# #     | LEAVE-001 | Annual Leave |
# #     | LEAVE-002 | Sick Leave   |
# #     | LEAVE-003 | Unpaid Leave |


# # Scenario Outline: <TestID>: Successful approval for <leaveType> request
# #   Prerequisites: at least one leave request record is pending approval

# #   Given I am logged in as an Approver user
# #   When I navigate to leave page through navigation
# #   When I click the "Leave List" button in the top bar menu
# #   When I click the "Search" button in the main page
# #   Then I can see a list of leave requests
# #   When I click the "Approve" button for the <leaveType> request
# #   Then I should see a success message displayed



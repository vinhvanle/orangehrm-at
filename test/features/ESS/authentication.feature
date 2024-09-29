# Feature: Login Feature

#     Background:
#         Given the user is on the login page

#     Scenario: AUTH-001: Successful login with valid credentials and logout
#         When the user enters valid username and password
#         And the user clicks on the login button
#         Then the user should be redirected to the dashboard page
#         When the user clicks on the logout button
#         Then the user should be redirected to the login page

#     Scenario: AUTH-002: Unsuccessful login with invalid credentials
#         When the user enters invalid username and password
#         And the user clicks on the login button
#         Then the user should see an error message

#     Scenario: AUTH-003: Unsuccessful login with empty credentials
#         When the user enters empty username and password
#         And the user clicks on the login button
#         Then the user should see required fields error

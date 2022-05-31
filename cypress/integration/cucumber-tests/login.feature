Feature: Sign In
  As a customer,
  I want to login with email and password,
  So that I can use the application.

  Background:
    Given I open login page

  Scenario Outline: Loggin with valid credentials
    When I fill username with "<username>"
    And I fill password with "<password>"
    And I click on sign in
    Then I should be at the home page
    And I logout

    Examples:
      | username | password  |
      | 5010     | Password1 |

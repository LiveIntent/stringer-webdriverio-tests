Feature: Login

  Scenario: Verify admin user is able to login to portal app

    Given I am in the "login" page
    When I login to application as admin
    Then I should see the landingPage

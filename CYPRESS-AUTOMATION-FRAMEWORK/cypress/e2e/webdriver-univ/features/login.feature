Feature: WebDriver University login page

    Scenario: Login using valid credentials
        Given I access webdriver university login portal page
        When i enter username webdriver
        And i enter password webdriver123
        And i click login button
        Then I should be presented with the message validation succeeded
import { Before, Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"

Given('I access webdriver university login portal page', ()=> {
    cy.visit("http://webdriveruniversity.com/Login-Portal/index.html");
})

When('i enter username webdriver {word}', (userName)=> {
    cy.get("#text").type(userName);
})


//// <reference types="cypress"/>
//// <reference types="cypress-iframe"/>

import 'cypress iframe'

describe('frame test', function() {
    it('iframe test', function() {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find("a[href*='mentorship']").eq(0).click()
    })


})

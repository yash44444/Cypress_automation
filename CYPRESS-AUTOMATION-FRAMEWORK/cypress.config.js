const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,tsx,feature}",
    chromeWebSecurity: false,
    screenshotOnRunFailure1: true,
    trashAssetsBeforeRun: true
  },
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },
  retries: {
    runMode: 0,
    openMode: 1
  },
  env: {
    webdriveruniv_homepage: "",
    first_name: "yash"
  }

})
  


//Anytime we change anything in the config file kill the cypress test runner first and turn it back on so that the change is reflected
const { defineConfig } = require("cypress");
module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1980,
  chromeWebSecurity:false,
  retries:2,
  env: {
    site_URL: 'https://techglobal-training.com'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});



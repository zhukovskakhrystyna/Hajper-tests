const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 20000,
  chromeWebSecurity: false,
  pageLoadTimeout: 20000,
  video: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  reporter: "cypress-multi-reporters",

  reporterOptions: {
    reporterEnabled: "mochawesome",
    mochawesomeReporterOptions: {
      reportDir: "cypress/reports/mocha",
      quite: true,
      overwrite: true,
      html: true,
      json: false,
      video: true,
    },
  },

  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
    baseUrl: "https://www.hajper.com/sv/",
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});

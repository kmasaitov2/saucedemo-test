const { trace } = require("console");

module.exports = {
    browsers: ['chromium'],
    headless : true,
    screenshot : 'on',
    trace : 'on',
    reporter: 'allure',
    reporterOptions: {
      outputDir: './allure-results',
    },
  };
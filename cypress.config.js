const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'yh7pea',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

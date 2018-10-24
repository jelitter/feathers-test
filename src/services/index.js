const scenario = require('./scenario/scenario.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(scenario);
};

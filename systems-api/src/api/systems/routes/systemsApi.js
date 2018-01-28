'use strict';

const systemsHandler = require('../handlers/systemsHandler');

let register = function (plugin, options, next) {
  plugin.route({
    method: 'GET',
    path: '/systems',
    handler: systemsHandler.systems
  });

  next();
};

register.attributes = {
  name: 'systemsApi',
  version: '0.0.1'
};

module.exports = register;

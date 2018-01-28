'use strict';

const systemsMapper = require('./mapper/systemsMapper');

const shortListSystems = require('./mocks/systems-short-list.json')[0].systems;

let systemsHandler = {};

systemsHandler.systems = function (request, reply) {
  reply(shortListSystems.map((system) => {
    return systemsMapper.normaliseDBSystem(system);
  })).code(200);
};

module.exports = systemsHandler;

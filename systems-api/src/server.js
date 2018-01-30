'use strict';

const Hapi = require('hapi');
const Good = require('good');

const systemsApi = require('./api/systems/routes/systemsApi');

let server = new Hapi.Server();

server.connection({
  port: process.env.PORT || '4000',
  routes: { cors: true }
});

const options = {
  ops: {
    interval: 1000
  },
  reporters: {
    console: [{
      module: 'good-squeeze',
      name: 'Squeeze',
      args: [{ log: '*', response: '*' }]
    }, {
      module: 'good-console'
    }, 'stdout']
  }
};

// Register our API
server.register([
  systemsApi,
  {
    register: Good,
    options: options
  }
], (err) => {
  if (err) {
    throw err;
  }
});

// Start the server
server.start((err) => {
  if (err) {
    throw err;
  }
  console.log('Server started at: ' + server.info.uri);
});

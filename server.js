'use strict';

const routes = require('./authorRoute');
const server = require('./fastify_server')({
  logger: {
    level: 'info'
  }
});

routes.forEach((route, index) => {
  server.route(route);
});

server.listen(3000, (err, address) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
});

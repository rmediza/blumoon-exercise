'use strict';

// const knex = require('knex');
const server = require('./fastify_server')({
  logger: {
    level: 'info'
  }
});

server.listen(3000, (err, address) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
});

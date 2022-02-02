'use strict';

const server = require('./fastify_server')({
  logger: {
    level: 'info',
    prettyPrint: true
  }
});

server.listen(3000, (err, address) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
});

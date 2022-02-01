// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true });

// Declare a route
function build () {
  fastify.get('/', async () => {
    return 'Welcome to Fastify Server';
  });
  return fastify;
}

// // Start the server
// fastify.listen(3000);
// console.log('listening at http://localhost:3000');

module.exports = build;

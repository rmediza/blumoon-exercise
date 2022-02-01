// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true });

// Declare a route
fastify.get('/', async (request, reply) => {
  return 'Welcome to Fastify Server';
});

// Start the server
fastify.listen(3000);
console.log('listening at http://localhost:3000');

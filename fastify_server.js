// Require the framework and instantiate it
const fastify = require('fastify');
const routes = require('./authorRoute');

// Declare a route
function build (opts = {}) {
  const app = fastify(opts);

  app.get('/', async () => {
    return 'Welcome to Fastify Server';
  });

  routes.forEach((route, index) => {
    app.route(route);
  });

  return app;
}

// // Start the server
// fastify.listen(3000);
// console.log('listening at http://localhost:3000');

module.exports = build;

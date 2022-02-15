// Require the framework and instantiate it
const fastify = require('fastify');
const routes = require('./authorRoute');
const knex = require('knex')({
  client: 'pg',
  connection: {
    host: 'localhost',
    port: '5432',
    user: 'postgres',
    password: 'pgcol45',
    database: 'devDB'
  }
});

// Declare a route
function build (opts = {}) {
  const app = fastify(opts);

  app.decorate('knex', knex);

  app.addHook('onClose', (instance, done) => {
    instance.knex.destroy();
    done();
  });

  app.get('/', (req, rep) => {
    rep.send('Welcome to Fastify Server ');
  });

  routes.forEach((route, index) => {
    app.route(route);
  });

  return app;
}

module.exports = build;

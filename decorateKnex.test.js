// require to instantiate
const { test } = require('tap');
const build = require('./fastify_server');

test('Check Knex Instance', async ({ equal }) => {
  const app = build();

  equal(app.hasDecorator('knex'), true, 'Knex Decorate');
});

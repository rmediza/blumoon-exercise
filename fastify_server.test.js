// require to instantiate
const { test } = require('tap');
const build = require('./fastify_server');

test('requests the "/" route', async ({ equal }) => {
  const app = build();

  const response = await app.inject({
    method: 'GET',
    url: '/'
  });

  equal(response.statusCode, 200, 'returns a status code of 200');
});

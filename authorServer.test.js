// require to instantiate
const { test } = require('tap');
const build = require('./fastify_server');

test('requests get, post, put, delete', async ({ equal }) => {
  const app = build();

  const root = await app.inject(
    {
      method: 'GET',
      url: '/'
    }
  );

  const get = await app.inject(
    {
      method: 'GET',
      url: '/authors'
    }
  );

  const post = await app.inject(
    {
      method: 'POST',
      url: '/author',
      payload: { author: 'mike' }
    }
  );

  const put = await app.inject(
    {
      method: 'PUT',
      url: '/put/1',
      payload: { author: 'john' }
    }
  );

  const del = await app.inject(
    {
      method: 'DELETE',
      url: '/del/1'
    }
  );

  equal(root.statusCode, 200, 'root status code of 200');

  // equal get post put del
  equal(get.statusCode, 200, 'get status code of 200');
  equal(post.statusCode, 200, 'post status code of 200');
  equal(put.statusCode, 200, 'put status code of 200');
  equal(del.statusCode, 200, 'delete status code of 200');
});

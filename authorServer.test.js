// require to instantiate
const { test } = require('tap');
const build = require('./fastify_server');

const exRes = [
  { msg: 'Author with ID 1 is deleted' },
  { id: 1, author: 'john' },
  { id: 5, author: 'mike' },
  { id: 1, author: 'Stephen King' },
  { id: 2, author: 'J.K Rowling' },
  { id: 3, author: 'John Grisham' },
  { id: 4, author: 'Dan Brown' }
];

test('requests get, post, put, delete', async ({ equal }) => {
  const app = build();

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

  // equal get post put del
  equal((JSON.parse(get.body)[0].author), exRes[3].author, 'GET Response');

  equal(JSON.parse(post.body).id, exRes[2].id, 'POST Response');

  equal(JSON.parse(put.body).id, exRes[1].id, 'PUT Response');

  equal(JSON.parse(del.body).msg, exRes[0].msg, 'DELETE Response');
});

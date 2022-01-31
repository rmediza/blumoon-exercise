const { test, end } = require('tap');
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

const testTable = function (knex) {
  return knex.schema.hasTable('bookTB');
};

test('Checking if Table Exist', async ({ equal }) => {
  const y = await testTable(knex);
  equal(y, true, 'bookTB must ok for expected result is true');
});

end();

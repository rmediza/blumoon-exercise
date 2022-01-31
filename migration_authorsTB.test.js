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

const testTables = function (knex) {
  return knex.schema.hasTable('authorsTB');
};

// to check, result, message
test('Checking if Table exist', async ({ equal }) => {
  const y = await testTables(knex);
  equal(y, true, 'authorsTB must ok for expected result is true');
});

end();

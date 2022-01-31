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

const testTable1 = function (knex, table) {
  return knex.schema.hasTable(table);
};

test('Checking if Table Exist', async ({ equal }) => {
  // check if response is equal to true
  equal(await testTable1(knex, 'shelvesTB'), true, 'shelvesTB expected result is true');
  equal(await testTable1(knex, 'levelTB'), true, 'levelTB expected result is true');
});

end();

const { test } = require('tap');
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

const testTables = function (knex, table) {
  return knex.schema.hasTable(table).then((result) => {
    return (result) ? true : false;
  });
};

async function tst() {
  let y = await testTables(knex, 'authorsTB');
  let z = await testTables(knex, 'TBauthors');

// to check, result, message
  test('Checking if Table exist', ({ equal, end }) => {
    equal(y, true, 'authorsTB must ok for expected result is true');
    equal(z, false, 'TBauthors must ok for expected result is false');
    end();
  });
}

tst();

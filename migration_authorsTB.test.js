const tst = require('tap');
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

function testTable (table) {
  return knex.schema.hasTable(table)
    .then(console.log)
    .catch(console.log);
}
// checks testTable
tst.resolves(testTable('authorsTB'), 'Check authorsTB Table Exist');

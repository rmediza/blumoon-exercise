
exports.up = function (knex) {
  return knex.schema.createTable('authorsTB', function (table) {
    table.increments('authorID').primary();
    table.text('firstName').notNullable();
    table.text('lastName').notNullable();
    table.text('penName').notNullable();
    table.date('bDate').notNullable();
    table.time('created_at').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('authorsTB');
};

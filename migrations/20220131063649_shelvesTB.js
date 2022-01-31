
exports.up = function (knex) {
  return knex.schema
    .createTable('shelvesTB', function (table) {
      table.increments('shelfID').primary();
      table.text('category').notNullable();
      table.text('location').notNullable();
    })
    .createTable('levelTB', function (table) {
      table.increments('levelID').primary();
      table.integer('shelfID').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.foreign('shelfID').references('shelfID').inTable('shelvesTB');
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTable('shelfTB')
    .dropTable('levelTB');
};

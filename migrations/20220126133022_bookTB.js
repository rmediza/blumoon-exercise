
exports.up = function (knex) {
  return knex.schema.createTable('bookTB', function (table) {
    table.increments('bookID').primary();
    table.text('title').notNullable();
    table.text('description').notNullable();
    table.date('publishYear').notNullable();
    table.integer('authorID').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('bookTB');
};

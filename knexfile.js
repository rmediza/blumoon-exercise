// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      port: '5432',
      user: 'postgresql',
      password: 'pgcol45',
      database: 'knex_test',
      charset: 'utf8'
    }
  }
};

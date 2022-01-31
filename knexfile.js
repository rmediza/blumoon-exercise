// Update with your config settings.
module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      port: '5432',
      user: 'postgres',
      password: 'pgcol45',
      database: 'devDB'
    }
  },

  staging: {
    client: 'pg',
    connection: {
      database: 'devDB',
      user: 'postgres',
      password: 'pgcol45'
    },
    pool: {
      min: 2,
      max: 10
    }//,
    // migrations: {
    //   tableName: 'knex_migrations'
    // }
  },

  production: {
    client: 'pg',
    connection: {
      database: 'devDB',
      user: 'postgres',
      password: 'pgcol45'
    },
    pool: {
      min: 2,
      max: 10
    }//,
    // migrations: {
    //   tableName: 'knex_migrations'
    // }
  }
};

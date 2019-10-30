# Create a Node/Express Server

## Postgres Integration

https://gist.github.com/NigelEarle/80150ff1c50031e59b872baf0e474977

Run 'yarn knex init' to create the knexfile
Adjust the config file to point to your local/production DB

```javascript
    module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: 'passowrd',
      database: 'boilerplate'
    },
    migrations: {
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds',
    },
  },

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user: 'username',
  //     password: 'password',
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10,
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations',
  //   },
  // },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds/production',
    },
  },
};

```

### Creating migrations and seeds

These commands will create the migrations and seeds directories for you

Migrations: Run npm knex migrate:make <table>
Seeds: Run npm knex seed:make <seed name>

Update Table:
`npm knex migrate:rollback` that command removes all data and tables from the db
`npm knex migrate:latest` that command updates the table
`npm knex seed:run` fills the table with "seed" data
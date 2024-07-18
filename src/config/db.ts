import "dotenv/config";
/**
 * This module uses the ES6 export syntax
 * The reason why there are two is because sequelize-cli doesnt natively support ES6 exports
 * and we need to reference it in our files.
 * The database.js file is used to store the database configuration settings that the sequelize-cli would use.
 */
const username = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_DATABASE;
const host = process.env.DB_HOST;

export const setting = {
  development: {
    username: username,
    password: password,
    database: database,
    host: host,
    dialect: "mysql",
  },
  test: {
    username: username,
    password: password,
    database: database,
    host: host,
    dialect: "mysql",
  },
  production: {
    username: username,
    password: password,
    database: database,
    host: host,
    dialect: "postgres",
  },
};
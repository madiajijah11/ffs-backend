const { Pool } = require("pg");

require("dotenv").config();

const dbHelper = new Pool({
  connectionString: process.env.DB_URL,
});

module.exports = dbHelper;

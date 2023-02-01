const { Pool } = require("pg");

require("dotenv").config();

const dbHelper = new Pool({
  connectionString: process.env.DB_URL,
});
dbHelper.connect((err) => {
  if (err) {
    console.log(err);
    console.log("database is not connect");
  } else {
    console.log("database is connect!");
  }
});
module.exports = dbHelper;

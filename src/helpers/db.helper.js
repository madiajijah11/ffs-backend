const { Pool } = require("pg");

require("dotenv").config();

const dbHelper = new Pool({
  connectionString: process.env.DB_URL,
});

// dbHelper.connect((e) => {
//   if (e) {
//     console.log("data is not connected");
//   } else {
//     console.log("data is connected");
//   }
// });

module.exports = dbHelper;

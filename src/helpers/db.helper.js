const { Pool } = require('pg')

require('dotenv').config()

const dbHelper = new Pool({
  connectionString: 'postgresql://postgres:RRMTyP9jTSlxOJL4@db.fotdduolvxjmcdhdvecc.supabase.co:5432/postgres',
});
dbHelper.connect((err) => {
  if (err) {
    console.log(err)
    console.log('database is not connect')
  } else {
    console.log('database is connect!')
  }
})
module.exports = dbHelper

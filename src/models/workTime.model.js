const dbHelper = require('../helpers/db.helper')

exports.getAllWorkTime = async () => {
  try {
    const sql = 'SELECT * FROM "workTimes"'
    const newWorkTime = await dbHelper.query(sql)
    return newWorkTime.rows
  } catch (error) {
    if (error) throw error
  }
}

exports.createWorkTime = async (data) => {
  try {
    const sql = 'INSERT INTO "workTimes" (name) VALUES ($1) RETURNING *'
    const values = [
      data.name
    ]
    const newWorkTime = await dbHelper.query(sql, values)
    return newWorkTime.rows[0]
  } catch (error) {
    if (error) throw error
  }
}

exports.getWorkTimeById = async (id) => {
  try {
    const sql = 'SELECT * FROM "workTimes" WHERE id = $1'
    const newWorkTime = await dbHelper.query(sql, [id])
    return newWorkTime.rows[0]
  } catch (error) {
    if (error) throw error
  }
}

exports.updateWorkTime = async (id, data) => {
  try {
    const sql = 'UPDATE "workTimes" SET "name" = COALESCE(NULLIF($1, \'\'), "name") WHERE id = $2 RETURNING *'
    const values = [
      data.name,
      id
    ]
    const newWorkTime = await dbHelper.query(sql, values)
    return newWorkTime.rows[0]
  } catch (error) {
    if (error) throw error
  }
}

exports.deleteWorkTime = async (id) => {
  try {
    const sql = 'DELETE FROM "workTimes" WHERE id = $1 RETURNING *'
    const newWorkTime = await dbHelper.query(sql, [id])
    return newWorkTime.rows[0]
  } catch (error) {
    if (error) throw error
  }
}

const dbHelper = require('../helpers/db.helper')

exports.getAllForgotPassword = async () => {
  try {
    const sql = 'SELECT * FROM "forgotPassword"'
    const newForgotPassword = await dbHelper.query(sql)
    return newForgotPassword.rows
  } catch (error) {
    if (error) throw error
  }
}

exports.createForgotPassword = async (data) => {
  try {
    const sql = 'INSERT INTO "forgotPassword" (email, code, "userId") VALUES ($1, $2, $3) RETURNING *'
    const values = [data.email, data.code, data.userId]
    const newForgotPassword = await dbHelper.query(sql, values)
    return newForgotPassword.rows[0]
  } catch (error) {
    if (error) throw error
  }
}

exports.getForgotPasswordById = async (id) => {
  try {
    const sql = 'SELECT * FROM "forgotPassword" WHERE id = $1'
    const newForgotPassword = await dbHelper.query(sql, [id])
    return newForgotPassword.rows[0]
  } catch (error) {
    if (error) throw error
  }
}

exports.updateForgotPassword = async (id, data) => {
  try {
    const sql = 'UPDATE "forgotPassword" SET "email" = COALESCE(NULLIF($1, \'\'), "email"), "code" = COALESCE(NULLIF($2, \'\'), "code") WHERE id = $3 RETURNING *'
    const values = [data.email, data.code, id]
    const newForgotPassword = await dbHelper.query(sql, values)
    return newForgotPassword.rows[0]
  } catch (error) {
    if (error) throw error
  }
}

exports.deleteForgotPassword = async (id) => {
  try {
    const sql = 'DELETE FROM "forgotPassword" WHERE id = $1 RETURNING *'
    const newForgotPassword = await dbHelper.query(sql, [id])
    return newForgotPassword.rows[0]
  } catch (error) {
    if (error) throw error
  }
}

exports.selectUserByEmailAndCode = async (data) => {
  try {
    const sql = 'SELECT * FROM "forgotPassword" WHERE email=$1 AND code=$2'
    const value = [data.email, data.code]
    const newResetPassword = await dbHelper.query(sql, value)
    return newResetPassword.rows[0]
  } catch (error) {
    if (error) throw error
  }
}

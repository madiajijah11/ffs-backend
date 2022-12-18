const dbHelper = require("../helpers/db.helper");
const errorHandler = require("../helpers/errorHandler.helper");

exports.getGroupUsers = async () => {
  try {
    const sql = `SELECT * FROM "groupUsers"`;
    const groupUsers = await dbHelper.query(sql);
    return groupUsers.rows;
  } catch (error) {
    if (error) errorHandler(error, res);
  }
};

exports.createGroupUser = async (data) => {
  try {
    const sql = `INSERT INTO "groupUsers" (name) VALUES ($1) RETURNING *`;
    const values = [data.name];
    const newGroupUser = await dbHelper.query(sql, values);
    return newGroupUser.rows[0];
  } catch (error) {
    if (error) errorHandler(error, res);
  }
};

exports.getGroupUserById = async (id) => {
  try {
    const sql = `SELECT * FROM "groupUsers" WHERE id = $1`;
    const groupUser = await dbHelper.query(sql, [id]);
    return groupUser.rows[0];
  } catch (error) {
    if (error) errorHandler(error, res);
  }
};

exports.updateGroupUser = async (id, data) => {
  try {
    const sql = `UPDATE "groupUsers" SET name = COALESCE(NULLIF($1, ''), name) WHERE id = $2 RETURNING *`;
    const values = [data.name, id];
    const updatedGroupUser = await dbHelper.query(sql, values);
    return updatedGroupUser.rows[0];
  } catch (error) {
    if (error) errorHandler(error, res);
  }
};

exports.deleteGroupUser = async (id) => {
  try {
    const sql = `DELETE FROM "groupUsers" WHERE id = $1 RETURNING *`;
    const deletedGroupUser = await dbHelper.query(sql, [id]);
    return deletedGroupUser.rows[0];
  } catch (error) {
    if (error) errorHandler(error, res);
  }
};

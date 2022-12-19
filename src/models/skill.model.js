const dbHelper = require("../helpers/db.helper");

exports.getAllSkill = async () => {
  try {
    const sql = 'SELECT * FROM "skills"';
    const newSkill = await dbHelper.query(sql);
    return newSkill.rows;
  } catch (error) {
    if (error) throw error;
  }
};

exports.createSkill = async (data) => {
  try {
    const sql = `INSERT INTO "skills" (name) VALUES ($1) RETURNING *`;
    const values = [
      data.name
    ];
    const newSkill = await dbHelper.query(sql, values);
    return newSkill.rows[0];
  } catch (error) {
    if (error) throw error;
  }
};

exports.getSkillById = async (id) => {
  try {
    const sql = `SELECT * FROM "skills" WHERE id = $1`;
    const newSkill = await dbHelper.query(sql, [id]);
    return newSkill.rows[0];
  } catch (error) {
    if (error) throw error;
  }
};

exports.updateSkill = async (id, data) => {
  try {
    const sql = `UPDATE "skills" SET "name" = COALESCE(NULLIF($1, ''), "name") WHERE id = $2 RETURNING *`;
    const values = [
      data.name,
      id,
    ];
    const newSkill = await dbHelper.query(sql, values)
    return newSkill.rows[0]
  } catch (error) {
    if (error) throw error;
  }
};

exports.deleteSkill = async (id) => {
  try {
    const sql = `DELETE FROM "skills" WHERE id = $1 RETURNING *`;
    const newSkill = await dbHelper.query(sql, [id]);
    return newSkill.rows[0];
  } catch (error) {
    if (error) throw error;
  }
};

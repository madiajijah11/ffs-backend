const dbHelper = require("../helpers/db.helper");

exports.getSkillEmpolyee = async () => {
  try {
    const sql = 'SELECT * FROM "employeeSkill"';
    const skill = await dbHelper.query(sql);
    return skill.rows;
  } catch (error) {
    if (error) throw error;
  }
};

exports.createSkillEmployee = async (data) => {
  try {
    const sql = `INSERT INTO "employeeSkill" ("userId", "skillId") VALUES ($1, $2) RETURNING *`;
    const values = [
      data.userId,
      data.skillId,
    ];
    const newSkill = await dbHelper.query(sql, values);
    return newSkill.rows[0];
  } catch (error) {
    if (error) throw error;
  }
};

exports.getSkillEmployeeById = async (id) => {
  try {
    const sql = `SELECT * FROM "employeeSkill" WHERE id = $1`;
    const skill = await dbHelper.query(sql, [id]);
    return skill.rows[0];
  } catch (error) {
    if (error) throw error;
  }
};

exports.updateSkillEmployee = async (id, data) => {
  try {
    const sql = `UPDATE "employeeSkill" SET "userId" = COALESCE(NULLIF($2, '')::BIGINT, "userId"),
    "skillId" = COALESCE(NULLIF($3, '')::BIGINT, "skillId"),
    "updatedAt" = now()
    WHERE id = $1 RETURNING *`;
    const values = [
      id,
      data.userId,
      data.skillId,
    ];
    const skill = await dbHelper.query(sql, values);
    return skill.rows[0];
  } catch (error) {
    console.log(error)
    if (error) throw error;
  }
};

exports.deleteSkillEmployee = async (id) => {
  try {
    const sql = `DELETE FROM "employeeSkill" WHERE id = $1 RETURNING *`;
    const skill = await dbHelper.query(sql, [id]);
    return skill.rows[0];
  } catch (error) {
    if (error) throw error;
  }
};

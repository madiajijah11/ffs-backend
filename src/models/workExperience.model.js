const dbHelper = require("../helpers/db.helper");
const errorHandler = require('../helpers/errorHandler.helper')

exports.getAllWorkExperience = async () => {
  try {
    const sql = 'SELECT * FROM "workExperience"';
    const newData = await dbHelper.query(sql);
    return newData.rows;
  } catch (error) {
    if (error) return errorHandler(error, res);
  }
};

exports.createWorkExperience = async (data) => {
  try {
    const sql = `INSERT INTO "workExperience" ("userId", "position", "company", "joinDate", "endDate", "jobDescription") VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;
    const values = [
      data.userId,
      data.position,
      data.company,
      data.joinDate,
      data.endDate,
      data.jobDescription
    ];
    const newData = await dbHelper.query(sql, values);
    return newData.rows[0];
  } catch (error) {
    if (error) return errorHandler(error, res);
  }
};

exports.getWorkExperienceById = async (id) => {
  try {
    const sql = `SELECT * FROM "workExperience" WHERE id = $1`;
    const newData = await dbHelper.query(sql, [id]);
    return newData.rows[0];
  } catch (error) {
    if (error) return errorHandler(error, res);
  }
};

exports.updateWorkExperience = async (id, data) => {
  try {
    const sql = `UPDATE "workExperience" SET "userId" = COALESCE(NULLIF($2, '')::BIGINT, "userId"), "position" = COALESCE(NULLIF($3, ''), "position"), "company" = COALESCE(NULLIF($4, ''), "company"), "joinDate" = COALESCE(NULLIF($5, '')::TIMESTAMPTZ, "joinDate"), "endDate" = COALESCE(NULLIF($6, '')::TIMESTAMPTZ, "endDate") WHERE id = $1 RETURNING *`;
    const values = [
      id,
      data.userId,
      data.position,
      data.company,
      data.joinDate,
      data.endDate
    ];
    const newData = await dbHelper.query(sql, values)
    return newData.rows[0]
  } catch (error) {
    if (error) return errorHandler(error, res);
  }
};


exports.deleteWorkExperience = async (id) => {
  try {
    const sql = `DELETE FROM "workExperience" WHERE id = $1 RETURNING *`;
    const newData = await dbHelper.query(sql, [id]);
    return newData.rows[0];
  } catch (error) {
    if (error) return errorHandler(error, res);
  }
};

const dbHelper = require("../helpers/db.helper");
const errorHandler = require('../helpers/errorHandler.helper')

exports.getAllProfileEmployee = async () => {
  try {
    const sql = 'SELECT * FROM "profileEmployee"';
    const newProfile = await dbHelper.query(sql);
    return newProfile.rows;
  } catch (error) {
    if (error) return errorHandler(error, res);
  }
};

exports.createProfileEmployee = async (data) => {
  try {
    const sql = `INSERT INTO "profileEmployee" ("userId", "jobDesk", domicile, instagram, github, gitlab, description) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`;
    const values = [
      data.userId,
      data.jobDesk,
      data.domicile,
      data.instagram,
      data.github,
      data.gitlab,
      data.description,
    ];
    const newProfile = await dbHelper.query(sql, values);
    return newProfile.rows[0];
  } catch (error) {
    if (error) return errorHandler(error, res);
  }
};

exports.getProfileEmployeeById = async (id) => {
  try {
    const sql = `SELECT * FROM "profileEmployee" WHERE id = $1`;
    const newProfile = await dbHelper.query(sql, [id]);
    return newProfile.rows[0];
  } catch (error) {
    if (error) return errorHandler(error, res);
  }
};

exports.updateProfileEmployee = async (id, data) => {
  try {
    const sql = `UPDATE "profileEmployee" SET "userId" = COALESCE(NULLIF($1, '')::BIGINT, "userId"), "jobDesk" = COALESCE(NULLIF($2, ''), "jobDesk"), "domicile" = COALESCE(NULLIF($3, ''), "domicile"), "instagram" = COALESCE(NULLIF($4, ''), "instagram"), "github" = COALESCE(NULLIF($5, ''), "github"), "gitlab" = COALESCE(NULLIF($6, ''), "gitlab"), "description" = COALESCE(NULLIF($7, ''), "description") WHERE id = $8 RETURNING *`;
    const values = [
      data.userId,
      data.jobDesk,
      data.domicile,
      data.instagram,
      data.github,
      data.gitlab,
      data.description,
      id,
    ];
    const newProfile = await dbHelper.query(sql, values)
    return newProfile.rows[0]
  } catch (error) {
    if (error) return errorHandler(error, res);
  }
};

exports.deleteProfileEmployee = async (id) => {
  try {
    const sql = `DELETE FROM "profileEmployee" WHERE id = $1 RETURNING *`;
    const newProfile = await dbHelper.query(sql, [id]);
    return newProfile.rows[0];
  } catch (error) {
    if (error) return errorHandler(error, res);
  }
};
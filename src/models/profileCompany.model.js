const dbHelper = require("../helpers/db.helper");
const errorHandler = require("../helpers/errorHandler.helper");

exports.getAllProfileCompany = async () => {
  try {
    const sql = 'SELECT * FROM "profileCompany"';
    const newData = await dbHelper.query(sql);
    return newData.rows;
  } catch (error) {
    if (error) return errorHandler(error, res);
  }
};

exports.createProfileCompany = async (data) => {
  try {
    const sql = `INSERT INTO "profileCompany" ("userId", domicile, description, instagram, "linkedIn") VALUES ($1, $2, $3, $4, $5) RETURNING *`;
    const values = [
      data.userId,
      data.domicile,
      data.description,
      data.instagram,
      data.linkedIn,
    ];
    const newData = await dbHelper.query(sql, values);
    return newData.rows[0];
  } catch (error) {
    console.log(error);

    if (error) return errorHandler(error, res);
  }
};

exports.getProfileCompanyById = async (id) => {
  try {
    const sql = `SELECT * FROM "profileCompany" WHERE id = $1`;
    const newData = await dbHelper.query(sql, [id]);
    return newData.rows[0];
  } catch (error) {
    if (error) return errorHandler(error, res);
  }
};

exports.updateProfileCompany = async (id, data) => {
  try {
    const sql = `UPDATE "profileCompany" SET "userId" = COALESCE(NULLIF($1, '')::BIGINT, "userId"), "domicile" = COALESCE(NULLIF($2, ''), "domicile"), "description" = COALESCE(NULLIF($3, ''), "description"), "instagram" = COALESCE(NULLIF($4, ''), "instagram"), "linkedIn" = COALESCE(NULLIF($5, ''), "linkedIn") WHERE id = $6 RETURNING *`;
    const values = [
      data.userId,
      data.domicile,
      data.description,
      data.instagram,
      data.linkedIn,
      id,
    ];
    const newData = await dbHelper.query(sql, values);
    return newData.rows[0];
  } catch (error) {
    if (error) return errorHandler(error, res);
  }
};

exports.deleteProfileCompany = async (id) => {
  try {
    const sql = `DELETE FROM "profileCompany" WHERE id = $1 RETURNING *`;
    const newData = await dbHelper.query(sql, [id]);
    return newData.rows[0];
  } catch (error) {
    if (error) return errorHandler(error, res);
  }
};

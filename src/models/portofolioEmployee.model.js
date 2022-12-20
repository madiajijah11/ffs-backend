const dbHelper = require("../helpers/db.helper");

exports.getAllPortofolioEmployee = async () => {
  try {
    const sql = 'SELECT * FROM "portofolioEmployee"';
    const newPortofolioEmployee = await dbHelper.query(sql);
    return newPortofolioEmployee.rows;
  } catch (error) {
    if (error) throw error;
  }
};

exports.createPortofolioEmployee = async (data) => {
  try {
    const sql = `INSERT INTO "portofolioEmployee" ("appName", "repositoryLink", "appPicture", "userId") VALUES ($1, $2, $3, $4) RETURNING *`;
    const values = [
      data.appName,
      data.repositoryLink,
      data.appPicture,
      data.userId
    ];
    const newPortofolioEmployee = await dbHelper.query(sql, values);
    return newPortofolioEmployee.rows[0];
  } catch (error) {
    if (error) throw error;
  }
};

exports.getPortofolioEmployeById = async (id) => {
  try {
    const sql = `SELECT * FROM "portofolioEmployee" WHERE id = $1`;
    const portofolioEmployee = await dbHelper.query(sql, [id]);
    return portofolioEmployee.rows[0];
  } catch (error) {
    if (error) throw error;
  }
};

exports.getPortofolioEmployeByUserId = async (id) => {
  try {
    const sql = `SELECT * FROM "portofolioEmployee" WHERE "userId" = $1`;
    const portofolioEmployee = await dbHelper.query(sql, [id]);
    return portofolioEmployee.rows[0];
  } catch (error) {
    if (error) throw error;
  }
};

exports.updatePortofolioEmployee = async (id, data) => {
  try {
    const sql = `UPDATE "portofolioEmployee" SET "appName" = COALESCE(NULLIF($1, ''), "appName"),
    "repositoryLink" = COALESCE(NULLIF($2, ''), "repositoryLink"),
    "appPicture" = COALESCE(NULLIF($3, ''), "appPicture"),
    "userId" = COALESCE(NULLIF($4, '')::BIGINT, "userId")
    WHERE id = $5 RETURNING *`;
    const values = [
      data.appName,
      data.repositoryLink,
      data.appPicture,
      data.userId,
      id,
    ];
    const portofolioEmployee = await dbHelper.query(sql, values);
    return portofolioEmployee.rows[0];
  } catch (error) {
    if (error) throw error;
  }
};

exports.deletePortofolioEmployee = async (id) => {
  try {
    const sql = `DELETE FROM "portofolioEmployee" WHERE id = $1 RETURNING *`;
    const portofolioEmployee = await dbHelper.query(sql, [id]);
    return portofolioEmployee.rows[0];
  } catch (error) {
    if (error) throw error;
  }
};
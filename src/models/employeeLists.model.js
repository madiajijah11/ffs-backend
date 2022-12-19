const dbHelper = require("../helpers/db.helper");

exports.countAllEmployeeLists = async (filter) => {
  try {
    const sql = `SELECT COUNT (s.name) as "totalData"
    FROM skills s
    JOIN "employeeSkill" eS on s.id = eS."skillId"
    JOIN users u on u.id = eS."userId"
    JOIN "profileEmployee" pE on u.id = pE."userId"
    JOIN "workTimes" wT on wT.id = pE."workTimeId"
    WHERE s.name LIKE $1`;
    const values = [`%${filter.search}%`];
    const result = await dbHelper.query(sql, values);
    return result;
  } catch (error) {
    if (error) throw error;
  }
};

exports.getEmployeeLists = async (filter) => {
  try {
    const sql = `SELECT u.id, u."fullName", pE."jobDesk", wT.name as "workTime", pE.domicile,
    string_to_array(trim(string_agg(DISTINCT s.name, ',')), ',') as skills, u."createdAt", u."updatedAt"
    FROM skills s
    JOIN "employeeSkill" eS on s.id = eS."skillId"
    JOIN users u on u.id = eS."userId"
    JOIN "profileEmployee" pE on u.id = pE."userId"
    JOIN "workTimes" wT on wT.id = pE."workTimeId"
    WHERE s.name LIKE $1
    GROUP BY u.id, u."fullName", pE."jobDesk", wT.name, pE.domicile, u."createdAt", u."updatedAt"
    ORDER BY "${filter.sortBy}" ${filter.sort} LIMIT $2 OFFSET $3`;
    const values = [`%${filter.search}%`, filter.limit, filter.offset];
    const result = await dbHelper.query(sql, values);
    return result;
  } catch (error) {
    if (error) throw error;
  }
};

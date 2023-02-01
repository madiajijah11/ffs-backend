const dbHelper = require('../helpers/db.helper')

exports.countAllEmployeeLists = async filter => {
  try {
    const sql = `SELECT COUNT (u.id) as "totalData"
    FROM users u
    FULL JOIN "profileEmployee" pE on u.id = pE."userId"
    FULL JOIN "workTimes" wT on wT.id = pE."workTimeId"
    FULL JOIN "employeeSkill" eS on u.id = eS."userId"
    FULL JOIN skills s on s.id = eS."skillId"
    WHERE u."groupUser" = '1' AND s.name LIKE $1`
    const values = [`%${filter.search}%`]
    const result = await dbHelper.query(sql, values)
    return result
  } catch (error) {
    if (error) throw error
  }
}

exports.getEmployeeLists = async filter => {
  try {
    const sql = `SELECT u.id,
    u."fullName",
    u.picture
    pE."jobDesk",
    wT.name as "workTime",
    pE.domicile,
    string_to_array(trim(string_agg(DISTINCT s.name, ',')), ',' ) as skills,
    u."createdAt",
    u."updatedAt"
    FROM users u
    FULL JOIN "profileEmployee" pE on u.id = pE."userId"
    FULL JOIN "workTimes" wT on wT.id = pE."workTimeId"
    FULL JOIN "employeeSkill" eS on u.id = eS."userId"
    FULL JOIN skills s on s.id = eS."skillId"
    WHERE u."groupUser" = '1' AND s.name LIKE $1
    GROUP BY u.id, u."fullName", u.picture, pE."jobDesk", wT.name, pE.domicile, u."createdAt", u."updatedAt"
    ORDER BY "${filter.sortBy}" ${filter.sort} LIMIT $2 OFFSET $3`
    const values = [`%${filter.search}%`, filter.limit, filter.offset]
    const result = await dbHelper.query(sql, values)
    return result
  } catch (error) {
    if (error) throw error
  }
}

const dbHelper = require("../helpers/db.helper");

exports.getUser = async (id) => {
  try {
    const sql = `SELECT u.id, u."fullName", pE."jobDesk", wT.name as "workTime", pE.domicile, u."phoneNumber",
    pE.description, string_to_array(trim(string_agg(DISTINCT s.name, ',')), ',') as skills,
    u.email, pE.instagram, pE.github, pE.gitlab, u."groupUser"
    FROM users u
    FULL JOIN "profileEmployee" pE on u.id = pE."userId"
    FULL JOIN "employeeSkill" eS on u.id = eS."userId"
    FULL JOIN skills s on eS."skillId" = s.id
    FULL JOIN "workTimes" wT on wT.id = pE."workTimeId"
    WHERE u.id = $1
    GROUP BY u.id, u."fullName", pE."jobDesk", wT.name, pE.domicile, u."phoneNumber",
    pE.description, u.email, pE.instagram, pE.github, pE.gitlab, u."groupUser"`;
    const result = await dbHelper.query(sql, [id]);
    return result.rows[0];
  } catch (error) {
    if (error) throw error;
  }
};

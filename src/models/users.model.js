const dbHelper = require('../helpers/db.helper')

exports.getUsers = async () => {
  try {
    const sql = 'SELECT * FROM users'
    const users = await dbHelper.query(sql)
    return users.rows
  } catch (error) {
    if (error) throw error
  }
}

exports.createUser = async (data) => {
  try {
    const sql = 'INSERT INTO users ("fullName", email, "phoneNumber", password, "groupUser", "companyName", "companyField", "picture") VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *'
    const values = [
      data.fullName,
      data.email,
      data.phoneNumber,
      data.password,
      2,
      data.companyName,
      data.companyField,
      data.picture
    ]
    const newUser = await dbHelper.query(sql, values)
    return newUser.rows[0]
  } catch (error) {
    if (error) throw error
  }
}

exports.getUserById = async (id) => {
  try {
    const sql = 'SELECT * FROM users WHERE id = $1'
    const user = await dbHelper.query(sql, [id])
    return user.rows[0]
  } catch (error) {
    if (error) throw error
  }
}

exports.getUserProfilEmployee = async (id) => {
  try {
    const sql = `select u.id, u.picture, u."fullName", pe."jobDesk", wt.name as "workTime", pe."domicile", u."phoneNumber", pe.description,
    u."email", pe."instagram", pe."github", pe."gitlab", we."position", we."company", we."joinDate", we."endDate", we."jobDescription",
    string_to_array(trim(string_agg(DISTINCT s.name, ',')), ',' ) as skills,
    string_agg(DISTINCT(pfe."appName") , ', ') as "appName",
    string_agg(DISTINCT(pfe."repositoryLink") , ', ') as "repositoryLink",
    string_agg(DISTINCT(pfe."appPicture") , ', ') as "appPicture"
    from "users" as u
    full join "profileEmployee" as pe on pe."userId" = u."id"
    full join "workTimes" as wt on wt."id" = pe."workTimeId"
    full join "employeeSkill" as es on es."userId" = u."id"
    full join "skills" as s on s."id" = es."skillId"
    full join "portofolioEmployee" as  pfe on pfe."userId" = u."id"
    full join "workExperience" as we on we."userId" = u."id"
    where u."id" = $1
    group by u.id, u.picture, u."fullName", pe."jobDesk", wt."name", pe."domicile", u."phoneNumber", pe."description",
    u."email", pe."instagram", pe."github", pe."gitlab", we."position", we."company", we."joinDate", we."endDate", we."jobDescription"`
    const user = await dbHelper.query(sql, [id])
    return user.rows[0]
  } catch (error) {
    if (error) throw error
  }
}

exports.getUserProfilRecruiter = async (id) => {
  try {
    const sql = `select u.picture, u."fullName", pe."domicile", pe."description", pe."instagram", pe."linkedIn", u."phoneNumber",
    u."email", u."companyName", u."companyField"
    from "users" as u
    full join "profileCompany" as pe on pe."userId" = u."id"
    where u."id" = $1`
    const user = await dbHelper.query(sql, [id])
    return user.rows[0]
  } catch (error) {
    if (error) throw error
  }
}

exports.getUserByEmail = async (email) => {
  try {
    const sql = 'SELECT * FROM users WHERE email = $1'
    const user = await dbHelper.query(sql, [email])
    return user.rows[0]
  } catch (error) {
    if (error) throw error
  }
}

exports.updateUser = async (id, data) => {
  try {
    const sql = `UPDATE users SET "fullName" = COALESCE(NULLIF($1, ''), "fullName"),
    email = COALESCE(NULLIF($2, ''), email),
    "phoneNumber" = COALESCE(NULLIF($3, ''), "phoneNumber"),
    password = COALESCE(NULLIF($4, ''), password),
    "groupUser" = COALESCE(NULLIF($5, '')::BIGINT, "groupUser"),
    "companyName" = COALESCE(NULLIF($6, ''), "companyName"),
    "companyField" = COALESCE(NULLIF($7, ''), "companyField")
    WHERE id = $8 RETURNING *`
    const values = [
      data.fullName,
      data.email,
      data.phoneNumber,
      data.password,
      data.groupUser,
      data.companyName,
      data.companyField,
      id
    ]
    const user = await dbHelper.query(sql, values)
    return user.rows[0]
  } catch (error) {
    if (error) throw error
  }
}
exports.deleteUser = async (id) => {
  try {
    const sql = 'DELETE FROM users WHERE id = $1 RETURNING *'
    const user = await dbHelper.query(sql, [id])
    return user.rows[0]
  } catch (error) {
    if (error) throw error
  }
}

exports.selectUserByEmail = async (email) => {
  try {
    const sql = 'SELECT * FROM users WHERE email=$1'
    const value = [email]
    const userByEmail = await dbHelper.query(sql, value)
    return userByEmail.rows[0]
  } catch (error) {
    if (error) throw error
  }
}

exports.getUserByEmail = async (email) => {
  try {
    const sql = 'SELECT * FROM users WHERE email = $1'
    const user = await dbHelper.query(sql, [email])
    return user.rows[0]
  } catch (error) {
    if (error) throw error
  }
}

exports.createUserEmployee = async (data) => {
  try {
    const sql = 'INSERT INTO users ("fullName", email, "phoneNumber", password, "groupUser") VALUES ($1, $2, $3, $4, 1) RETURNING *'
    const values = [data.fullName, data.email, data.phoneNumber, data.password]
    const newUser = await dbHelper.query(sql, values)
    return newUser.rows[0]
  } catch (error) {
    if (error) throw error
  }
}

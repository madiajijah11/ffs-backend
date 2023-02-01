const dbHelper = require('../helpers/db.helper')

exports.checkConversation = async (userId, receiverId) => {
  try {
    const sql =
      'SELECT c.id, c."userId", c."receiverId", u."fullName", u.picture FROM conversation c JOIN users u on c."receiverId" = u.id WHERE "userId" = $1 AND c."receiverId" = $2 OR "userId" = $2 AND c."receiverId" = $1'
    const values = [userId, receiverId]
    const conversation = await dbHelper.query(sql, values)
    return conversation.rows
  } catch (error) {
    if (error) throw error
  }
}

exports.getConversation = async userId => {
  try {
    const sql =
      'SELECT c.id, c."userId", c."receiverId", u."fullName", u.picture FROM conversation c JOIN users u on c."receiverId" = u.id WHERE "userId" = $1'
    const conversation = await dbHelper.query(sql, [userId])
    return conversation.rows
  } catch (error) {
    if (error) throw error
  }
}

exports.createConversation = async data => {
  try {
    const sql =
      'INSERT INTO "conversation" ("userId", "receiverId") VALUES ($1, $2) RETURNING *'
    const values = [data.userId, data.receiverId]
    const newConversation = await dbHelper.query(sql, values)
    return newConversation.rows
  } catch (error) {
    if (error) throw error
  }
}

exports.sendMessage = async data => {
  try {
    const sql =
      'INSERT INTO "message" ("conversationId", "senderId", "receiverId", "message") VALUES ($1, $2, $3, $4) RETURNING *'
    const values = [
      data.conversationId,
      data.senderId,
      data.receiverId,
      data.message
    ]
    const newMessage = await dbHelper.query(sql, values)
    return newMessage.rows[0]
  } catch (error) {
    if (error) throw error
  }
}

exports.getMessages = async conversationId => {
  try {
    const sql = 'SELECT * FROM "message" WHERE "conversationId" = $1'
    const messages = await dbHelper.query(sql, [conversationId])
    return messages.rows
  } catch (error) {
    if (error) throw error
  }
}

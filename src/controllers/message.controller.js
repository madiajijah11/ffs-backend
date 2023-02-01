const errorHandler = require('../helpers/errorHandler.helper')
const {
  createConversation,
  sendMessage,
  checkConversation,
  getConversation,
  getMessages
} = require('../models/message.model')

exports.sendMessage = async (req, res) => {
  try {
    const { senderId, receiverId, message } = req.body
    const conversation = await checkConversation(senderId, receiverId)
    if (conversation.length > 0) {
      const data = {
        conversationId: conversation[0].id,
        senderId,
        receiverId,
        message
      }
      const newMessage = await sendMessage(data)
      return res.status(200).json({
        success: true,
        message: 'Message sent successfully',
        results: newMessage
      })
    } else {
      const newConversation = await createConversation({
        userId: senderId,
        receiverId
      })
      const data = {
        conversationId: newConversation[0].id,
        senderId,
        receiverId,
        message
      }
      const newMessage = await sendMessage(data)
      return res.status(200).json({
        success: true,
        message: 'Message sent successfully',
        results: newMessage
      })
    }
  } catch (error) {
    console.log(error)
    if (error) return errorHandler(error, res)
  }
}

exports.getConversation = async (req, res) => {
  try {
    const senderId = req.params.id
    const conversation = await getConversation(senderId)
    return res.status(200).json({
      success: true,
      message: 'Conversation retrieved successfully',
      results: conversation
    })
  } catch (error) {
    if (error) return errorHandler(error, res)
  }
}

exports.getMessages = async (req, res) => {
  try {
    const conversationId = req.params.id
    const messages = await getMessages(conversationId)
    return res.status(200).json({
      success: true,
      message: 'Messages retrieved successfully',
      results: messages
    })
  } catch (error) {
    if (error) return errorHandler(error, res)
  }
}

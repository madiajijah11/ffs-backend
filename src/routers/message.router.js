const messageRouter = require('express').Router()
const {
  getConversation,
  sendMessage,
  getMessages
} = require('../controllers/message.controller')

messageRouter.get('/conversation/:id', getConversation)
messageRouter.post('/send', sendMessage)
messageRouter.get('/messages/:id', getMessages)

module.exports = messageRouter

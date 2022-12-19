const auth = require('express').Router()
const {forgotPassword, resetPassword} = require ('../controllers/auth.controllers')


auth.post('/forgotPassword', forgotPassword)
auth.post('/resetPassword', resetPassword)

module.exports = auth

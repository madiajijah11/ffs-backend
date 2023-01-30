const forgotPassword = require('express').Router()
const {
  getAllForgotPassword,
  createForgotPassword,
  getForgotPasswordById,
  updateForgotPassword,
  deleteForgotPassword
} = require('../controllers/forgotPasswords.controllers')

forgotPassword.get('/', getAllForgotPassword)
forgotPassword.get('/:id', getForgotPasswordById)
forgotPassword.post('/', createForgotPassword)
forgotPassword.patch('/:id', updateForgotPassword)
forgotPassword.delete('/:id', deleteForgotPassword)

module.exports = forgotPassword

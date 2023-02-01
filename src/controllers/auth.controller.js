const errorHandler = require('../helpers/errorHandler.helper')
const { transport, mailOptions } = require('../helpers/mail.helper')
const {
  selectUserByEmail,
  updateUser,
  createUserEmployee,
  createUser
} = require('../models/users.model')
const {
  createForgotPassword,
  selectUserByEmailAndCode,
  deleteForgotPassword
} = require('../models/forgotPasswords.model')
const argon = require('argon2')
const jwt = require('jsonwebtoken')

const loginEmployee = async (req, res) => {
  try {
    const user = await selectUserByEmail(req.body.email)
    const token = jwt.sign(
      { id: user.id, role: user.groupUser },
      process.env.SECRET_KEY
    )
    console.log(user)
    if (user.groupUser === 1) {
      if (await argon.verify(user.password, req.body.password)) {
        return res.status(200).json({
          success: true,
          message: 'Success Login Employee',
          results: {
            token
          }
        })
      } else {
        return res.status(400).json({
          success: false,
          message: 'Wrong Email or Password'
        })
      }
    } else {
      return res.status(400).json({
        success: false,
        message: 'This email is not registered as an employee'
      })
    }
  } catch (err) {
    if (err) errorHandler(err, res)
  }
}
const loginRecruiter = async (req, res) => {
  try {
    const user = await selectUserByEmail(req.body.email)
    const token = jwt.sign(
      { id: user.id, role: user.groupUser },
      process.env.SECRET_KEY
    )
    console.log(user)
    console.log('hit control login recruiter')
    console.log(user.groupUser)
    if (user.groupUser === 2) {
      console.log('hit recruiter')
      if (await argon.verify(user.password, req.body.password)) {
        return res.status(200).json({
          success: true,
          message: 'Success Login Recruiter',
          results: {
            token
          }
        })
      } else {
        return res.status(400).json({
          success: false,
          message: 'Wrong Email or Password'
        })
      }
    } else {
      return res.status(400).json({
        success: false,
        message: 'This email is not registered as an recruiter'
      })
    }
  } catch (err) {
    if (err) errorHandler(err, res)
  }
}

const registerEmployee = async (req, res) => {
  const { password, confirmPassword } = req.body
  if (password !== confirmPassword) {
    return res.status(400).json({
      success: false,
      message: 'Password and confirm password must be match'
    })
  }
  try {
    req.body.password = await argon.hash(req.body.password)
    const user = await createUserEmployee(req.body)
    const token = jwt.sign(
      { id: user.id, role: user.groupUser },
      process.env.SECRET_KEY
    )
    return res.status(200).json({
      success: true,
      message: 'Register Employee Success',
      results: {
        token
      }
    })
  } catch (error) {
    if (error) errorHandler(error, res)
  }
}

const registerRecruiter = async (req, res) => {
  const { password, confirmPassword } = req.body
  if (password !== confirmPassword) {
    return res.status(400).json({
      success: false,
      message: 'Password and confirm password must be match'
    })
  }
  try {
    req.body.password = await argon.hash(req.body.password)
    const user = await createUser(req.body)
    const token = jwt.sign(
      { id: user.id, role: user.groupUser },
      process.env.SECRET_KEY
    )
    return res.status(200).json({
      success: true,
      message: 'Register Recruiter Success',
      results: {
        token
      }
    })
  } catch (error) {
    if (error) errorHandler(error, res)
  }
}

const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body
    const users = await selectUserByEmail(email)
    if (users) {
      const code = Math.ceil(Math.random() * 90000 + 10000)
      const data = {
        email,
        userId: users.id,
        code
      }
      await transport.sendMail(mailOptions(email, code))
      await createForgotPassword(data)
      res.status(200).json({
        success: true,
        message: 'Reset password has been requested.'
      })
    } else {
      return res.status(400).json({
        success: false,
        message: 'User not found'
      })
    }
  } catch (error) {
    if (error) errorHandler(error, res)
  }
}

const resetPassword = async (req, res) => {
  try {
    const { password, confirmPassword } = req.body
    if (password === confirmPassword) {
      const users = await selectUserByEmailAndCode(req.body)
      if (users) {
        const newPassword = await argon.hash(req.body.password)
        const reset = await updateUser(users.userId, { password: newPassword })
        if (reset) {
          await deleteForgotPassword(users.id)
          return res.status(200).json({
            success: true,
            message: 'Password updated, please re-login.'
          })
        }
      } else {
        return res.status(400).json({
          success: false,
          message: 'Email or code is not valid'
        })
      }
    } else {
      return res.status(400).json({
        success: false,
        message: 'Password and confirm password must be match'
      })
    }
  } catch (error) {
    if (error) errorHandler(error, res)
  }
}

module.exports = {
  loginEmployee,
  loginRecruiter,
  registerEmployee,
  registerRecruiter,
  forgotPassword,
  resetPassword
}

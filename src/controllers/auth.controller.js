const errorHandler = require("../helpers/errorHandler.helper");
const {
  selectUserByEmail,
  updateUser,
  createUserEmployee,
  createUser,
} = require("../models/users.model");
const {
  createForgotPassword,
  selectUserByEmailAndCode,
  deleteForgotPassword,
} = require("../models/forgotPasswords.model");
const bcrypt = require("bcrypt");
const argon = require("argon2");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  try {
    const user = await selectUserByEmail(req.body.email);
    const token = jwt.sign(
      { id: user.id, role: user.groupUser },
      "key-backend"
    );
    if (user.groupUser == 1) {
      if (await argon.verify(user.password, req.body.password)) {
        return res.status(200).json({
          success: true,
          message: "Success Login Employee",
          results: {
            token,
          },
        });
      } else {
        return res.status(400).json({
          success: false,
          message: "Wrong Email or Password",
        });
      }
    } else {
      if (await argon.verify(user.password, req.body.password)) {
        return res.status(200).json({
          success: true,
          message: "Success Login Recruiter",
          results: {
            token,
          },
        });
      } else {
        return res.status(400).json({
          success: false,
          message: "Wrong Email or Password",
        });
      }
    }
  } catch (err) {
    if (err) errorHandler(err, res);
  }
};

const registerEmployee = async (req, res) => {
  try {
    req.body.password = await argon.hash(req.body.password);
    const user = await createUserEmployee(req.body);
    return res.status(200).json({
      success: true,
      message: "Register Employee Success",
      results: user,
    });
  } catch (error) {
    if (error) errorHandler(err, res);
  }
};

const registerRecruiter = async (req, res) => {
  try {
    req.body.password = await argon.hash(req.body.password);
    const user = await createUser(req.body);
    return res.status(200).json({
      success: true,
      message: "Register Recruiter Success",
      results: user,
    });
  } catch (error) {
    if (error) errorHandler(err, res);
  }
};

const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const users = await selectUserByEmail(email);
    if (users) {
      const data = {
        email,
        userId: users.id,
        code: Math.ceil(Math.random() * 90000 + 10000),
      };
      await createForgotPassword(data);
      res.status(200).json({
        success: true,
        message: "Reset password has been requested.",
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }
  } catch (error) {
    if (error) errorHandler(error, res);
  }
};

const resetPassword = async (req, res) => {
  try {
    const { password, confirmPassword } = req.body;
    if (password === confirmPassword) {
      const users = await selectUserByEmailAndCode(req.body);
      if (users) {
        const newPassword = await argon.hash(req.body.password);
        const reset = await updateUser(users.userId, {password: newPassword} );

        if (reset) {
          await deleteForgotPassword(users.id);
          return res.status(200).json({
            success: true,
            message: "Password updated, please relogin.",
          });
        }
      }
    } else {
      return res.status(400).json({
        success: false,
        message: "Password and confirm password must be match",
      });
    }
  } catch (error) {
    if (error) errorHandler(error, res);
  }
};

module.exports = {
  login,
  registerEmployee,
  registerRecruiter,
  forgotPassword,
  resetPassword,
};

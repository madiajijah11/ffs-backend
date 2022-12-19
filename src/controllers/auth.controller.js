const jwt = require("jsonwebtoken");
const argon = require("argon2");
const { findOneByEmail, createUser } = require("../models/users.model");
const errorHandler = require("../helpers/errorHandler.helper");

exports.login = async (req, res) => {
  try {
    findOneByEmail(req.body.email, async (err, result) => {
      const user = result.rows[0];
      const token = jwt.sign(
        { id: user.id, role: user.groupUser },
        "key-backend"
      );
      console.log(token);
      if (req.body.groupUser == 1) {
        if (await argon.verify(user.password == req.body.password)) {
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
        if (await argon.verify(user.password == req.body.password)) {
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
    });
  } catch (err) {
    return errorHandler(err, res);
  }
};

exports.register = async (req, res) => {
  try {
    req.body.password = await argon.hash(req.body.password);
    createUser(req.body, (err, result) => {
      if (err) {
        return errorHandler(err, res);
      }
      return res.status(200).json({
        success: true,
        message: "Register Succes",
        results: result.rows[0],
      });
    });
  } catch (err) {
    return errorHandler(err, res);
  }
};

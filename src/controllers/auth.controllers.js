const errorHandler = require('../helpers/errorHandler.helper')
const selectUserByEmail = require('../models/users.model')

const forgotPassword = async (req, res) => {
  try {
    const {email} = req.body
    const forgotPassword = await selectUserByEmail(email)

  } catch (error) {
    if(error) errorHandler(err,res)
  }

  const { email } = req.body;
  selectUserByEmail(email, (err, { rows: users }) => {
    if (err) {
      return errorHandler(err, res);
    }
    if (users.length) {
      const [user] = users;
      const data = {
        email,
        userId: user.id,
        code: Math.ceil((Math.random() * 90000) + 10000),
      };
      modelCreatePassword(data, (err, { rows: results }) => {
        if (err) {
          return errorHandler(err, res);
        }
        if (results.length) {
          return res.status(200).json({
            success: true,
            message: "Reset password has been requested.",
          });
        }
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }
  });
};

const resetPassword = (req, res) => {
  const { password, confirmPassword } = req.body; //destruc dari req.body
  if (password === confirmPassword) {
    selectUserByEmailAndCode(req.body, (err, { rows: users }) => {
      if (err) {
        return errorHandler(err, res);
      }
      if (users.length) {
        const [resetRequest] = users;

        updatedUsers(
          { password },
          resetRequest.userId,
          (err, { rows: users }) => {
            if (err) {
              return errorHandler(err, res);
            }
            if (users.length) {
              //users disini dari distraction line 105
              modelDeleteResetPassword(resetRequest.userId, (err, { rows }) => {
                console.log(rows);
                if (!rows.length) {
                  return res.status(200).json({
                    success: true,
                    message: "Password updated, please relogin.",
                  });
                }
              });
            }
          }
        );
      }
    });
  } else {
    return res.status(400).json({
      success: false,
      message: "password and confirm password must be match",
    });
  }
};

module.exports = { forgotPassword, resetPassword };

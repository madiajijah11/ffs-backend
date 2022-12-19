const errorHandler = (error, res) => {
  if (err.message.includes('unique constraint "users_email_key"')) {
    return res.status(400).json({
      success: false,
      message: "Email sudah terdaftar",
    });
  }
  return res.status(500).json({
    success: false,
    message: "Something happened in our backend",
    error: error.message,
  });
};

module.exports = errorHandler;

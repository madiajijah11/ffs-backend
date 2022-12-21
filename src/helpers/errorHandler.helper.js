const errorHandler = (error, res) => {
  if (error.message.includes('unique constraint "users_email_key"')) {
    return res.status(400).json({
      success: false,
      message: "Email sudah terdaftar",
    });
  }
  if(error.message.includes("Cannot read property 'id' of undefined")){
    return res.status(400).json({
      success: false,
      message: "Email belum terdaftar",
    });

  }
  return res.status(500).json({
    success: false,
    message: "Something happened in our backend",
    error: error.message,
  });
};

module.exports = errorHandler;

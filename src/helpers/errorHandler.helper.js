const errorHandler = (error, res) => {
  return res.status(500).json({
    success: false,
    message: "Something happened in our backend",
    error: error.message,
  });
};

module.exports = errorHandler;

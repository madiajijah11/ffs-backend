const errorHandler = (error, res) => {
  return res.status(500).json({
    success: false,
    message: "Something happened in our backend",
  });
};

module.exports = errorHandler;

const errorHandler =  (err, res) => {
console.log(err)

return res.status(500).json({
  success: false,
  message: "Something happend in our backend"
})
}

module.exports = errorHandler
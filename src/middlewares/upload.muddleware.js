const multer = require("multer");
const errorHandler = require("../helpers/errorHandler.helper");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error("Only image files are allowed!"), false);
    } else {
      const extension = file.originalname.split(".");
      const ext = extension[extension.length - 1];
      const filename = `${new Date().getDate()}_${new Date().getTime()}.${ext}`;
      cb(null, filename);
    }
  },
});

const uploadImage = multer({
  storage: storage,
}).single("picture");

module.exports = (req, res, next) => {
  uploadImage(req, res, (error) => {
    if (error) {
      return errorHandler(error, res);
    }
    next();
  });
};

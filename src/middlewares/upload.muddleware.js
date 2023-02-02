const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const path = require("path");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "ffs",
    format: async (req, file) => path.extname(file.originalname).slice("1"), // supports promises as well
    public_id: (req, file) => {
      const randomNumber = Math.round(Math.random() * 9000000);
      const name = `${new Date().getDate()}_${randomNumber}`;
      return name;
    },
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5000000 }, //5MB
  fileFilter: (req, file, callback) => {
    console.log('ini file  ' + file)
    const format = ["jpg", "png", "jpeg"];
    const extension = file.originalname.split(".");
    const cekFormatFile = format.includes(extension[extension.length - 1]);
    if (!cekFormatFile) {
      return callback(new Error("Format picture not valid"));
    } else {
      return callback(null, true);
    }
  },
});

const uploadFile = upload.single("picture"); // upload (a , b, c)
const uploadMiddleware = (req, res, next) => {
  uploadFile(req, res, (error) => {
    console.log(req)
    if (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
    next();
  });
};

const uploadPortofolio = upload.single("appPicture");
const uploadPortfolio = (req, res, next) => {
  uploadPortofolio(req, res, (error) => {
    if (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
    next();
  });
};
module.exports = { uploadPortfolio, uploadMiddleware, cloudinary };

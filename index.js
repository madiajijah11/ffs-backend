const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

require("dotenv").config({
  path: ".env",
});

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/assets/uploads", express.static("uploads/"));

app.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Fazz-Fullstack (FFS)",
  });
});

const port = process.env.PORT || 8888;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

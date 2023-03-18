const express = require("express");
require("dotenv").config();
const connect = require("./db.js");
const app = express();
const multer = require("multer");
const bodyParser = require("body-parser");

// var restify = require("restify");
// const upload = multer();
// app.use(upload.array());
const cors = require("cors");
const fileUpload = require("express-fileupload");
app.use(
  fileUpload({
    useTempFiles: true,
  })
);
//Routes
// app.use(restify.plugins.bodyParser());
// app.use(multer().array());

const fileUploadRoute = require("./routes/file_upload.js");
//middleware
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes Middleware
app.use("/api/file", fileUploadRoute);
connect();

app.listen(8000, () => {
  console.log("Server connected on port 8000");
});

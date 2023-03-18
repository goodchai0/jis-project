const express = require("express");
const FileUpload = require("../model/file_upload");
const router = express.Router();
const cloudinary = require("../utils/cloudinary");

router.get("/", async (req, res, next) => {
  try {
    const currentFile = await FileUpload.findById("6415f95b2eb9f9b794966b5d");
    res.send({ success: true, data: currentFile.file_upload.url });
  } catch (error) {
    console.log(error);
    next(error);
  }
});
router.post("/create", async (req, res) => {
  try {
    const data = req.body;
    console.log(data.file_upload);

    const currentFile = await FileUpload.findById("6415f95b2eb9f9b794966b5d");
    console.log(currentFile);
    result = {
      file_upload: {
        public_id: "1",
        url: data.file_upload,
      },
    };
    // const result = await cloudinary.uploader.upload(
    //   // "C:\\Users\\amit\\Downloads\\download.jpg",
    //   data.file_upload,
    //   {
    //     folder: "file-upload",
    //   }
    // );
    console.log(result);
    let file_details;
    if (!currentFile) {
      file_details = await FileUpload.create({
        file_upload: {
          public_id: result.file_upload.public_id,
          url: result.file_upload.url,
        },
      });
    } else {
      file_details = await FileUpload.findOneAndUpdate(
        { _id: "6415f95b2eb9f9b794966b5d" },
        result,
        {
          new: true,
        }
      );
    }

    res.status(201).json({
      sucess: true,
      file_details,
    });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

module.exports = router;

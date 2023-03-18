const mongoose = require("mongoose");

const fileUploadSchema = new mongoose.Schema({
  file_upload: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
});

const FileUpload = new mongoose.model("FileUpload", fileUploadSchema);
module.exports = FileUpload;

const mongoose = require("mongoose");

const uri = process.env.URI;

const connect = async function connect() {
  try {
    await mongoose.connect(uri, { useNewUrlParser: true });
    console.log("Connected to mongoDb");
  } catch (error) {
    console.error(error);
  }
};
mongoose.set("strictQuery", false);

module.exports = connect;

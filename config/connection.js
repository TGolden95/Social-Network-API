const { builtinModules } = require("module");
const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"
    );
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
module.exports = dbConnection;

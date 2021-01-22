const Mongoose = require("mongoose");

const { initDataBaseAnalytics } = require("../middleware/database");

const Schema = Mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = initDataBaseAnalytics.model("users", userSchema);

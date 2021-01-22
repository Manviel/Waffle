const Mongoose = require("mongoose");

const { initDataBaseAnalytics } = require("../middleware/database");

const Schema = Mongoose.Schema;

const customerSchema = new Schema({
  username: String,
  name: String,
  address: String,
  birthdate: Date,
  email: String,
  active: Boolean,
});

module.exports = initDataBaseAnalytics.model("customers", customerSchema);

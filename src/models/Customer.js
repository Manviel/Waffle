const Mongoose = require("mongoose");

const Schema = Mongoose.Schema;

const customerSchema = new Schema({
  username: String,
  name: String,
  address: String,
  birthdate: Date,
  email: String,
  active: Boolean,
});

module.exports = Mongoose.model("customers", customerSchema);

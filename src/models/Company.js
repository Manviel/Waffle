const Mongoose = require("mongoose");

const { initDataBaseTraining } = require("../middleware/database");

const Schema = Mongoose.Schema;

const productSchema = {
  name: String,
  permalink: String,
};

const officeSchema = {
  address1: String,
  zip_code: String,
  city: String,
  latitude: Number,
  longitude: Number,
};

const ipoSchema = {
  valuation_amount: Number,
  valuation_currency_code: String,
  stock_symbol: String,
};

const companySchema = new Schema({
  name: String,
  homepage_url: String,
  number_of_employees: Number,
  founded_year: Number,
  description: String,
  overview: String,
  products: [productSchema],
  offices: [officeSchema],
  ipo: ipoSchema,
});

module.exports = initDataBaseTraining.model("companies", companySchema);

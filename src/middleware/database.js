const Mongoose = require("mongoose");

const initDataBaseAnalytics = Mongoose.createConnection(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.1rr9h.mongodb.net/${process.env.DB_NAME}`,
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);

const initDataBaseTraining = Mongoose.createConnection(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.1rr9h.mongodb.net/${process.env.DB_TITLE}`,
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);

module.exports = {
  initDataBaseAnalytics,
  initDataBaseTraining,
};

const Mongoose = require("mongoose");

const initDB = async () => {
  Mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.1rr9h.mongodb.net/${process.env.DB_NAME}`,
    { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
  );

  Mongoose.connection.once("open", () => {
    console.log("connected to database");
  });
};

module.exports = initDB;

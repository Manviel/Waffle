const Mongoose = require("mongoose");

const initDB = () => {
  Mongoose.connect(
    "mongodb+srv://admin0:admin0@cluster0.1rr9h.mongodb.net/fullstack?retryWrites=true&w=majority",
    { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
  );

  Mongoose.connection.once("open", () => {
    console.log("connected to database");
  });
};

module.exports = initDB;

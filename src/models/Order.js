const Mongoose = require("mongoose");

const Schema = Mongoose.Schema;

const orderSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  order: {
    type: Number,
    required: true,
  },
  list: [
    {
      name: {
        type: String,
      },
      quantity: {
        type: Number,
      },
      cost: {
        type: Number,
      },
    },
  ],
  user: {
    ref: "users",
    type: Schema.Types.ObjectId,
  },
});

module.exports = Mongoose.model("orders", orderSchema);

const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    id: { type: Number },
    name: { type: String },
    desc: { type: String },
    image: { type: String },
    category: { type: String },
    price: { type: Number },
  },
  {
    collection: "shoppers",
  }
);

const shopper = mongoose.model("Shoppers", schema);

module.exports = shopper;

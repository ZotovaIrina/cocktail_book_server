const mongoose = require("mongoose");

const cocktailSchema = new mongoose.Schema({
  name: String,
  description: String,
  ingredients: [
    {
      _id: String,
      quantity: Number,
      unit: String,
    },
  ],
});

module.exports = mongoose.model("Cocktails", cocktailSchema);

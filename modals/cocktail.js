const mongoose = require("mongoose");

const cocktailSchema = new mongoose.Schema({
  name: String,
  description: String,
  ingredients: Array<{
    _id: String,
    quantity: number,
    unit: string,
  }>,
});

module.exports = mongoose.model("Cocktails", cocktailSchema);

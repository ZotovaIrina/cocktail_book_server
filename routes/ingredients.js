var express = require("express");
var router = express.Router();

const Ingredient = require("../modals/ingredient");
const errors = require("./errors");

router.get("/getAllIngredients", async function (req, res, next) {
  const data = await Ingredient.find({});
  res.send(200, data);
});

router.post("/", async function (req, res, next) {
  if (req.body.name) {
    try {
      const ingredient = await Ingredient.create({
        name: req.body.name,
        description: req.body.description,
      });
      res.send(200, ingredient);
    } catch (e) {
      console.log("Error save", e);
      res.send(500, errors.ERROR_SAVE_DATA);
    }
  } else {
    res.send(400, errors.INVALID_DATA);
  }
});

module.exports = router;

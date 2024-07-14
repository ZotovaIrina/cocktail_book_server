var express = require("express");
var router = express.Router();

const Cocktail = require("../modals/cocktail");
const errors = require("./errors");

router.get("/getAllCocktails", async function (req, res, next) {
  const data = await Cocktail.find({});
  res.send(200, data);
});

router.post("/", async function (req, res, next) {
  if (
    req.body.name &&
    req.body.ingredients &&
    req.body.ingredients.length > 0
  ) {
    try {
      const cocktail = await Cocktail.create({
        name: req.body.name,
        description: req.body.description,
        ingredients: req.body.ingredients,
      });
      res.send(200, cocktail);
    } catch (e) {
      console.log("Error save", e);
      res.send(500, errors.ERROR_SAVE_DATA);
    }
  } else {
    res.send(400, errors.INVALID_DATA);
  }
});

module.exports = router;

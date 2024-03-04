var express = require("express");
var router = express.Router();

const mongoose = require("mongoose");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

mongoose.connect(process.env.DATABASE_URL);

const Ingredient = require("../modals/ingredient");

/* GET ingredients listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

/* Save new ingredients listing. */
router.post("/", function (req, res, next) {
  console.log("!!!!!", req.body);
  if (req.body.name) {
    const ingredient = new Ingredient({
      name: req.body.name,
      description: req.body.description,
    });
    ingredient
      .save()
      .then(() => {
        console.log("saved");
        res.send(200);
      })
      .catch((e) => {
        console.log("Error save", e);
        res.send(500);
      });
  } else {
    res.send(400, "invalid-data");
  }
});

module.exports = router;

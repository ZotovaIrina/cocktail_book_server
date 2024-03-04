var express = require("express");
var router = express.Router();

const Ingredient = require("../modals/ingredient");
const errors = require("./errors");

/* GET ingredients listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

/* Save new ingredients listing. */
router.post("/", function (req, res, next) {
  if (req.body.name) {
    const ingredient = new Ingredient({
      name: req.body.name,
      description: req.body.description,
    });
    ingredient
      .save()
      .then((val) => {
        res.send(200, val);
      })
      .catch((e) => {
        console.log("Error save", e);
        res.send(500, errors.ERROR_SAVE_DATA);
      });
  } else {
    res.send(400, errors.INVALID_DATA);
  }
});

module.exports = router;

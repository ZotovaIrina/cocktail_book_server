var express = require("express");
var router = express.Router();

/* GET ingredients listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

/* Save new ingredients listing. */
router.post("/", function (req, res, next) {
  console.log("!!!!!", req.body);
  res.send(200);
});

module.exports = router;

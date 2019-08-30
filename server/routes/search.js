const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const { validationResult } = require("express-validator");

let productname;

router.post(
  "/search-products",
  [
    //validate and sanitize input field
    body("productname")
      .not()
      .isEmpty()
      .trim()
      .escape()
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // There are errors. Do sth
      res.send(errors);
    } else {
      //no errors, change value of productname to value user entered
      productname = req.body.productname;
      res.redirect("/");
    }
  }
);

router.get("/display-products", (req, res) => {
  res.send("hello");
});

/*router.get("/", (req, res) => {
  res.send("hello");
});*/
module.exports = router;

const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const { validationResult } = require("express-validator");
const fetch = require("node-fetch");
const debug = require("debug")("q-hunt");

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
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // There are errors, remain on landing page

      res.redirect("/");
    } else {
      //no errors, change value of productname to value user entered
      productname = req.body.productname;
      res.redirect("/search");
    }
  }
);

router.get("/display-products", (req, res) => {
  const opts = {
    headers: {
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    method: "POST",
    mode: "cors",
    body: JSON.stringify({
      query: `query { posts(topic:${productname}) {
          edges{
            cursor
            node{
              id
              name
              tagline
              description
              url
              votesCount
              thumbnail{
                type
                url
              }
              
              reviewsRating
}}}}`
    })
  };

  fetch(`https://api.producthunt.com/v2/api/graphql`, opts)
    .then(res => {
      return res.json();
    })
    .then(json => {
      debug(json);
      res.send(json.data.posts.edges);
    })
    .catch(err => {
      debug(err);
    });
});

module.exports = router;

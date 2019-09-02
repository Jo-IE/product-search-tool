const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const { validationResult } = require("express-validator");
const fetch = require("node-fetch");

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
      //res.send(errors);
      res.redirect("/");
    } else {
      //no errors, change value of productname to value user entered
      productname = req.body.productname;
      res.redirect("/search");
    }
  }
);

router.get("/display-products", (req, res) => {
  //res.send("hello");
  const API_Key =
    "007bd065572b0831c9ba2b7d72b546613329d0cd1a459c9bcaf8cf93d503b3a6";

  const API_Secret =
    "6b9c2402775dfb7ee117a555b69828e343e5973695b23a4e4b8c46b6105c17f5";
  const TOKEN =
    "0c9e7ed62aeb763ee64334891a454ac0ba5c159f7fcfd97c4cf890236b62ecc5";
  const ACCESS_TOKEN =
    "abc16faa925a28c5ea452ed132f22b934c94fa21ccc633a1ce2a9881422778c4";
  const query = `query{ posts { edges { node { id, name } } } }`;
  const opts = {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
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
              description
              url
              thumbnail{
                type
                url
              }
              website
              reviewsRating
}}}}`
    })
  };

  fetch(`https://api.producthunt.com/v2/api/graphql`, opts)
    .then(res => {
      return res.json();
    })
    .then(json => {
      console.log(json);
      res.send(json.data.posts.edges);
    })
    .catch(err => res.redirect("/error"));
});

module.exports = router;

const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;
const router = require("./routes/search");
const bodyParser = require("body-parser");
require("dotenv").config();

app.use(express.static(path.join(__dirname, "build")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", router);

app.listen(port, () => console.log(`Listening on port ${port}`));

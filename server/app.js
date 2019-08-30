const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const router = require("./routes/search");

app.use("/", router);

app.listen(port, () => console.log(`Listening on port ${port}`));

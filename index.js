const express = require("express");
require("dotenv").config();
const app = express();

const PORT = process.env.PORT || 8500;

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.listen(PORT, async () => {
  console.log(`Listening on ${PORT}`);
});

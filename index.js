const express = require("express");
require("dotenv").config();
const app = express();

const PORT = process.env.PORT || 8500;

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res)=>{
    res.send("Welcome to about page")
})

app.listen(PORT, async () => {
  console.log(`Listening on ${PORT}`);
});

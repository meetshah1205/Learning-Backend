require('dotenv').config();
const express = require("express");
const app = express();
const port = 4000; 

app.get("/", function (req, res) {
  res.send("Hello World");
});

// Let's make more routes
app.get("/twitter", (req, res) => {
    res.send("Welcome to /twitter!");
});

app.get("/youtube", (req, res) => {
    res.send("<h1> Welcome to /youtube </h1.")
});

app.listen(process.env.PORT, function () {
  console.log(`App listening on http://localhost:${port}`);
});

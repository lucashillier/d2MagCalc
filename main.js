const pug = require("pug");
const fs = require("fs");
const express = require("express");
const app = express();

const { calcMag } = require("./calcMag");

app.use(express.json());

app.get("/", function(req, res, next) {
  let result = 0;
  let size = 0;
  let perk = 3;

  // Do calc
  if (Object.keys(req.query).length > 0) {
    size = parseInt(req.query.size);
    perk = parseInt(req.query.perk);

    result = calcMag(size, perk);
  }

  // Return result
  let data = pug.renderFile("pug_templates/index.pug", {
    result: result,
    size: size,
    perk: perk
  });
  res.status(200).end(data);
});

app.get("/calculate.js", function(req, res, next) {
  fs.readFile("./calculate.js", function(err, data) {
    if (err) {
      res.status(500).send();
    } else {
      res.setHeader("Content-Type", "application/json");
      res.status(200).end(data);
    }
  });
});

app.listen(3000);
console.log("Server listening at http://localhost:3000");

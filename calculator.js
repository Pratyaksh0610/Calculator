const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (request, response) {
  response.sendFile(__dirname + "/index.html");
  console.log(request);
});

app.post("/", function (request, response) {
  var n1 = Number(request.body.num1);
  var n2 = Number(request.body.num2);
  var result = n1 + n2;
  response.send("The result is " + result);
});

app.get("/bmiCalculator", function (request, response) {
  response.sendFile(__dirname + "/bmiCalculator.html");
  console.log(request);
});

app.post("/bmiCalculator", function (request, response) {
  var n1 = Number(request.body.weight);
  var n2 = Number(request.body.height);
  var result = (n1 * n1) / n2;
  response.send("The result is " + result);
});

app.listen(3000, function () {
  console.log("server started at port 3000");
});

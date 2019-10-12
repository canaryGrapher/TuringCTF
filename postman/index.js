/*jshint esversion: 6 */

const express = require("express");
const app = express();

var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));
app.use(
  express.urlencoded({
    extended: true
  })
);

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/homepage.html");
});

app.get("*", function(req, res) {
  res.sendFile(__dirname + "/public/errorpage.html");
});

app.unlock("/", (req, res) => {
  res.send("NllByteCTF{UNL0CK_TH15_FL4G}");
});

app.listen(PORT);

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
  const data = req.headers.referrer || req.headers.referer;
  console.log(data);
  if (data === "https://www.techtatva.in") {
    res.send("NullByteCTF{R3F3R4L_C0D3_000}");
  } else {
    res.sendFile(__dirname + "/public/indexss.html");
  }
});

app.get("*", function(req, res) {
  res.sendFile(__dirname + "/public/errorpage.html");
});

app.listen(PORT);

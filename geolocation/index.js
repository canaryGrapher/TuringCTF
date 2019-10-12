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

app.post("/secureLogin", (req, res) => {
  const data = req.body;
  console.log(data);
  var x = 0;
  var y = 0;
  if (data.password === "admin" && data.username === "admin") {
    if (data.ltxyz >= "-70.73" && data.ltxyz <= "-70.77") {
      y = 1;
    }
    if (data.lgxyz >= "11.71" && data.lgxyz <= "11.75") {
      x = 1;
    }
  } else if (data.password != "admin" || data.username != "admin") {
    res.send("Oops, looks like you got the wrong password or username");
  }

  if (x == "1" && y == "1") {
    res.send("Look here is your flag: NullByteCTF{T00_C00L_T0_H1D3}");
  }

  if (x != "1" || y != "1") {
    res.send("Return to base immediately!!");
  }
});

app.listen(PORT);

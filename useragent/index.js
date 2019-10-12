/*jshint esversion: 6 */
const fs = require("fs");
const express = require("express");
const app = express();

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

//Handling user login details

app.post("/secureLogin", (req, res) => {
  const data = req.body;
  console.log(data);
  res.locals.ua = req.get("User-Agent");
  if (data.password === "s@veTheZootaCrown" && data.username === "superuser") {
    if (res.locals.ua === "Zoota/4.3.1") {
      res.send("Oh look, you got your flag: NullByteCTF{U53R_4G3NT_007}");
    }
    if (res.locals.ua != "Zoota/4.3.1") {
      res.send(
        "Oh snap! This software is not suported by our servers for security purposes. Use a secured software."
      );
    }
  } else {
    res.send("Oops! looks like you've got the wrong passworrd.");
  }
  res.end();
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

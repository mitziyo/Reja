console.log("Hello Khan");
const express = require("express");
const res = require("express/lib/response");
const app = express();

// MongoDB chaqrish
const db = require("./server").db(); 

// 1 Krish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2  Session code
// 3 views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4 routing code

app.post("/create-item", (req, res) => {
  console.log(req.body);
  res.json({ test: "success" });
});

app.get("/author", (req, res) => {
  res.render("author", { user: user });
});

app.get("/", function (req, res) {
  res.render("reja");
});

module.exports = app;

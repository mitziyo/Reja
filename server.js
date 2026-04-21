console.log("Hello Khan");
const express = require("express");
const app = express();
const http = require("http");

// 1 Krish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 2  Session code
// 3 views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4 routing code
app.get("/", function (req, res){
    res.end("<h1> Hello World by Begzodali</h1>")
});

app.get("/hello", function (req, res){
    res.end("<h1> Hello khan How are u today?</h1>")
});

app.get("/place", function (req, res){
    res.end("<h1> The places that today you have to go!!!</h1>")
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
    console.log(`The server is running successfully on port: ${PORT}`)
});
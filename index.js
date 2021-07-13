const express = require("express");
const app = express();
const path = require("path");

//Use the public folder as the external file folder
app.use(express.static("public"));

//Set the view engine as ejs, which sets the default file type as .ejs
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("index.ejs");
});

app.get("/signin", function(req, res) {
    res.render("signin.ejs");
});

app.get("/signup", function(req, res) {
    res.render("signup.ejs");
});

app.get("/blog1", function(req, res) {
    res.render("blog1.ejs");
});

app.get("/blog2", function(req, res) {
    res.render("blog2.ejs");
});

app.get("/blog3", function(req, res) {
    res.render("blog3.ejs");
});

app.get("*", function(req, res) {
    res.render("error.ejs");
});

app.listen(1337, function(req, res) {
    console.log("Server started");
});
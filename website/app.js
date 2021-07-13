var express = require("express");
var path = require("path");

var blog1Router = require("./routes/blog1");
var blog2Router = require("./routes/blog2");
var blog3Router = require("./routes/blog3");
var indexRouter = require("./routes/index");
var signinRouter = require("./routes/signin");
var signupRouter = require("./routes/signup");
var errorRouter = require("./routes/error");

var app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/blog1", blog1Router);
app.use("/blog2", blog2Router);
app.use("/blog3", blog3Router);
app.use("/", indexRouter);
app.use("/signin", signinRouter);
app.use("/signup", signupRouter);
app.use("*", errorRouter);

module.exports = app;

// const express = require("express");
// const app = express.Router();
// const path = require("path");

// //Use the public folder as the external file folder
// app.use(express.static("public"));

// //Set the view engine as ejs, which sets the default file type as .ejs

// app.get("/", function(req, res) {
//     res.render("index.ejs");
// });

// app.get("/signin", function(req, res) {
//     res.render("signin.ejs");
// });

// app.get("/signup", function(req, res) {
//     res.render("signup.ejs");
// });

// app.get("/blog1", function(req, res) {
//     res.render("blog1.ejs");
// });

// app.get("/blog2", function(req, res) {
//     res.render("blog2.ejs");
// });

// app.get("/blog3", function(req, res) {
//     res.render("blog3.ejs");
// });

// app.get("*", function(req, res) {
//     res.render("error.ejs");
// });

app.listen(1337, function(req, res) {
    console.log("Server started");
});
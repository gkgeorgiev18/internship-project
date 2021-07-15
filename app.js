var express = require("express");
var path = require("path");
const bodyParser = require("body-parser");

var blog1Router = require("./website/routes/blog1");
var blog2Router = require("./website/routes/blog2");
var blog3Router = require("./website/routes/blog3");
var indexRouter = require("./website/routes/index");
var signinRouter = require("./website/routes/signin");
var signupRouter = require("./website/routes/signup");
var usersListRouter = require("./website/routes/usersList");
var errorRouter = require("./website/routes/error");

var app = express();

app.set("views", path.join(__dirname + "/website/", "views"));
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", blog1Router);
app.use("/", blog2Router);
app.use("/", blog3Router);
app.use("/", indexRouter);
app.use("/", signinRouter);
app.use("/", signupRouter);
app.use("/", usersListRouter);
app.use("*", errorRouter);

module.exports = app;

app.listen(1337, function(req, res) {
    console.log("Server started");
});
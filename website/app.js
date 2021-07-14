var express = require("express");
var path = require("path");

var blog1Router = require("./routes/blog1");
var blog2Router = require("./routes/blog2");
var blog3Router = require("./routes/blog3");
var indexRouter = require("./routes/index");
var signinRouter = require("./routes/signin");
var signupRouter = require("./routes/signup");
var usersListRouter = require("./routes/usersList");
var errorRouter = require("./routes/error");

var app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

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
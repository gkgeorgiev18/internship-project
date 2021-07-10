const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));
app.get('/', function(req, res) { res.sendFile(path.join(__dirname + '/index.html')) });
app.get('/signin', function(req, res) { res.sendFile(path.join(__dirname + '/signin.html')) });
app.get('/signup', function(req, res) { res.sendFile(path.join(__dirname + '/signup.html')) });
app.get('/blog1', function(req, res) { res.sendFile(path.join(__dirname + '/blog1.html')) });
app.get('/blog2', function(req, res) { res.sendFile(path.join(__dirname + '/blog2.html')) });
app.get('/blog3', function(req, res) { res.sendFile(path.join(__dirname + '/blog3.html')) });
app.listen(1337, function(req, res) { console.log('Server started') });
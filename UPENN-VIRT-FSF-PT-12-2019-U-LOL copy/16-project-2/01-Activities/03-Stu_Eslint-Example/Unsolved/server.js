var express = require("express");
//not sure if this is needed
var bodyParser = require("body-parser");

var path = require("path");
var app = express();

app.get("/", (req, res) => res.send("Hallelujah . . "));




var db = require("./models");



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

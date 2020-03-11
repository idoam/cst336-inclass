/* EJS = Embedded JavaScript 
    1. NodeJS looks for ejs files in "views"
    2. ejs files ends with .ejs
    3. Have to let the NodeJS engine know that we are using ejs
*/

var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(express.static("css"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    //res.send("HELLO WORLD");
    res.render("home");
});

var friendList = ["Alice", "Clark", "Bellemy", "Octovia"];

app.get("/friends", function(req, res) {
    //res.send("HELLO WORLD");
    res.render("friends", {friends: friendList});
});


app.post("/addfriend", function(req, res) {
    var newFriend = req.body.newfriend;
    friendList.push(newFriend);
    res.redirect("/friends");
});

app.post("/removefriend", function(req, res) {
    var newFriend = req.body.newfriend;
    friendList.pop(newFriend);
    res.redirect("/friends");
});

app.get("*", function(req, res) {
    //res.send("ERROR");
    res.render("error");
});

app.listen(process.env.PORT, function() {
    console.log("Server is up and running");
});


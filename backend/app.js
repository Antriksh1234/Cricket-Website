const express = require("express");
const app = express();
const {FAQ} = require('./Models/FAQ.js');
const {Tournament} = require('./Models/Tournaments.js');
const { Team } = require("./Models/Team.js");
const {connect} = require('./db/connect.js');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

connect();

app.get("/", function(req, res) {
    res.send("Hello World");
});

app.get("/FAQ", function(req, res) {
    FAQ.find(function (err, faqs) {
        if (err) {
            console.log(err);
            return;
        }
        res.send(faqs);
    });
});

app.get("/tournaments", function(req, res) {
    Tournament.find(function (err, tournaments) {
        if (err) {
            console.log(err);
            return;
        }
        res.send(tournaments);        
    });
});

app.get('/teams', function (req, res) {
   Team.find(function (err, teams) {
       if (err) {
           console.log(err);
           return;
       }
       res.send(teams);
   })
});

app.listen(8000, function(req, res) {
    console.log("Server running on port 8000");
});
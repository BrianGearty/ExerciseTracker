var db = require("../models");

module.exports = function (app) {
    // GET route for homepage data
    app.get("/", function (req, res) {
        console.log("HOME DATA ROUTE")
        db.Workout.find({})
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            });
    });

    // GET route for exercise data by ID
    app.get("api/exercise/:id", function (req, res){
        console.log("EXCERCISE BY ID ROUTE HIT")
        db.Workout.find({
            where: {
                _id: req.params._id
            }
        })
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
    });

    // GET route for stats data
    app.get("api/stats", function(req, res){
        db.Workout.find({})
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
    });

    // GET route for workouts data
    app.get("api/workouts", function(req, res){
        db.Workout.find({})
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
    });

    // POST route for workouts data
    app.post("api/workouts", function(req, res){
        db.Workout.find({})
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
    });

};
var db = require("../models");

module.exports = function(app) {
    console.log('we are inside api-routes file!!')

    // PUT route for exercise data by ID
    app.put("/api/workouts/:id", function (req, res){
        console.log("PUT EXCERCISE BY ID ROUTE HIT")
        db.Workout.findOneAndUpdate({_id: req.params._id})
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
    });

    // GET route for workouts data
    app.get("/api/workouts/", function(req, res){
        console.log("GET EXERCISE DATA ROUTE HIT")
        db.Workout.find()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
    });

    // POST route for workouts data
    app.post("/api/workouts", function(req, res){
        console.log("WORKOUT POST API ROUTE HIT")
        db.Workout.create({})
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
    });

    // GET route for stats data
    app.get("/api/workouts/range", function(req, res){
        db.Workout.find({}).limit(8)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
    });


};
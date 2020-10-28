var db = require("../models");

module.exports = function(app) {
    console.log('we are inside api-routes file!!')

    // PUT route for exercise data by ID
    app.put("/api/workouts/:id", function (req, res){
        console.log("PUT EXCERCISE BY ID ROUTE HIT")
        var exerciseId = req.params.id;
        console.log("req setup", req.params.id);
        var exerciseData = req.body;
        db.Workout.findByIdAndUpdate(
            {_id: exerciseId},
            {$push: {exercises: exerciseData}},
            {new:true, runValidators: true}
        )
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            console.log(err)
            res.json(err);
        });
    });

    // GET route for workouts data
    app.get("/api/workouts/", function(req, res){
        console.log("GET EXERCISE DATA ROUTE HIT", req.params)
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
        console.log("WORKOUT POST API ROUTE HIT", req.body)
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
        ("STATS GET ROUTE HIT", req.body)
        db.Workout.find({}).limit(8)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            console.log(err)
            res.json(err);
        });
    });


};
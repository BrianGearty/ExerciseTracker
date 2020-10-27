const path = require("path");

module.exports = function(app) {
    // GET route for index.html
    app.get("/", function(req, res){
        console.log("HOME HTML ROUTE HIT")
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    // GET route for exercise.html
    app.get("/exercise", function(req, res){
        console.log("EXERCISE HTML ROUTE HIT")
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });

    // GET route for stats.html
    app.get("/stats", function(req, res) {
        console.log("STATS HTML ROUTE HIT")
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });


}
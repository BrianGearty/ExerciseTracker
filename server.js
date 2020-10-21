const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = 3001;

const db = require("./models")

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

db.Workout.create({})
    .then(dbWorkout => {
        console.log(dbWorkout);
    })
    .catch(({ message }) => {
        console.log(message);
    });

// ROUTES to use
(require("./routes/view-routes.js"))(app);
(require("./routes/api-routes.js"))(app);

app.listen(PORT, function () {
    console.log(`App running on port ${PORT}!`)
});

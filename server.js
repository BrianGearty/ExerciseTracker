const express = require("express");
const app = express();
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/deep-thoughts',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);


app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


// ROUTES to use
(require("./routes/view-routes.js"))(app);
(require("./routes/api-routes"))(app);


app.listen(PORT, function () {
    console.log(`App running on port ${PORT}!`)
});

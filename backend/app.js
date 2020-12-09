var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");


var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");


var app = express();
var port = process.env.PORT || 3001; 



app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/index", indexRouter);
app.use("/users", usersRouter);

var URLdb = "mongodb+srv://DashBoardMONTELSBONNET:DashBoardMB@cluster0.rwcak.mongodb.net/DashBoardMONTELSBONNET?retryWrites=true&w=majority";
mongoose.connect(URLdb, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}
    );

var connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection établie");
})

var activityRouter = require('./routes/activity');
var goalRouter = require('./routes/goal');
var sommeilRouter = require('./routes/sommeil');


app.use("/activity", activityRouter);
app.use("/goal", goalRouter);
app.use("/sommeil", sommeilRouter);

app.listen(port, () => {
    console.log('Server is running on port:'+port);
});

module.exports = app;


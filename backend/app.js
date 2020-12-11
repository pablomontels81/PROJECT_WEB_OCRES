var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
const cors= require('cors');


var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");


var app = express();
var port = process.env.PORT || 3001; 



app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use("/index", indexRouter);
app.use("/users", usersRouter);

var URLdb = "mongodb+srv://DashBoardMONTELSBONNET:DashBoardMB@cluster0.rwcak.mongodb.net/DashBoardMONTELSBONNET?retryWrites=true&w=majority";
//var URLdb = "mongodb://localhost:27017/DashBoardMONTELSBONNET"
mongoose.connect(URLdb, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}
    );

var connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection établie");
})

const activityRouter = require('./routes/activities');
const sommeilRouter = require('./routes/sommeil');
const goalRouter = require('./routes/goal');

app.use("/activities", activityRouter);
app.use("/sommeils", sommeilRouter);
app.use("/goals", goalRouter);


app.listen(port, () => {
    console.log('Server is running on port:'+port);
});

module.exports = app;
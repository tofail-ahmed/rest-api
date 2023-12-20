const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRouter=require('./routes/users.route')
const app = express();
app.use(cors()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/users",userRouter)

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

//invalid url request response
app.use((req, res, next) => {
  res.send("404!! Bad url request");
});

//server error response
app.use((error, req, res, next) => {
  res.send("Something broke!!");
});
module.exports = app;

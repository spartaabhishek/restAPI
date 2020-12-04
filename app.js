const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser=require('body-parser')
require('dotenv/config')

app.use(bodyParser.json())

//import routes
const postRoute=require('./routes/post')
app.use('/post',postRoute)

//Routes
app.get("/", (req, res) => {
  res.send("we are on home");
});



//connsct to db

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true,useUnifiedTopology: true}, () => {
    console.log("connected to db");
  }
);

app.listen(3000);

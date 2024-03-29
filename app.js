const express = require('express');
const logger = require('morgan');
const cors = require('cors')
const dbConfig = require('./configs/db.config')

const mongoose = require('mongoose')
const app = express();
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(cors());
app.all("/*", function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, PATCH, OPTIONS"
  );
  if (req.method == "OPTIONS") {
    res.status(200).end();
  } else {
    next();
  }
});

//Handling uncaught exception

process.on("uncaughtException", (err)=>{
  console.log(`Error: ${err.message}`);
  console.log('Shutting down the server due to uncaught Exception');
  process.exit(1);
})
/// connect Mongodb database

mongoose.connect(dbConfig.DB_URL).then(()=>{
    console.log(`Successfully connected to database ${dbConfig.DB_NAME}....`)
}).catch(err => {
    console.error('Error connecting to database:', err);
})

module.exports = app;
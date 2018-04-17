const express = require('express');
const app = express();
// requires express

const mongoose = require('mongoose');
const config = require('./config/database');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
  if (err){
    console.log('Could NOT connect to database: ', err);
  } else {
    console.log('Connected to database: ' + config.db);
  }
});
// requires mongoose

app.get('*', (req, res) => {
  res.send('Server is running!');
});
//when there is a get request response is hellow rold

app.listen(8080, () => {
  console.log('Listening on port 8080');
});

//telling server to listen on port 8080

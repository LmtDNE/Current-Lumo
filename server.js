'use strict'
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/'));


module.exports = app.listen(port, (err)=> {
  if(err) {
    console.log(" ❌ You have recieved the following error: ", err);
  }
  console.log(`🌎 🌍 🌏 Server is listening on port: ${port} 🌏 🌍 🌎`);
});
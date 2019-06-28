const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const port = 3838
const app = express();

const bookings = require('../database/bookings.js');

app.use(express.static(path.join(__dirname, '../dist')));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(port, ()=>{
  console.log('listening on ' + port);
})

app.get("/bookings", (req, res)=>{
   console.log('bookings requested')
   res.send(bookings);
})

app.get("/rooms", (req, res)=>{
  console.log("rooms requested");
  let rooms = require('../mockRoomData.js');
  res.send(rooms);
})
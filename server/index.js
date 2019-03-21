const express = require('express');
const path = require('path');

const port = 3838
const app = express();

app.use(express.static(path.join(__dirname, '../dist')));

app.listen(port, ()=>{
  console.log('listening on ' + port);
})

// app.get("/", (req, res)=>{
//   res.send('STUDY ROOM RESERVATION BITCHES');
// })
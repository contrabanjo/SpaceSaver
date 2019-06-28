//uncomment if you have firebase set up
//const bookingsRef = require('./bookingsRef.js');

const bookings = [];


//populates a set of mock bookings to use as example when the database is not active
const moment = require('moment')

let names = ['Anna', 'George', 'Randy', 'Jared', 'Casey', 'Anand', 'Din']

names.forEach((name, index)=>{
  let allRooms = ['Las Trampas Room', 'Redwood Room', 'Walnut Room', 'Black Oak Room', 'Blue Oak Room']
  let randomIndex = Math.floor(Math.random() * allRooms.length);
  let newRoom = allRooms[randomIndex];

  let newTime = moment({hours: 10 + index}).toISOString();

  bookings.push({
    startTime: newTime,
    room: newRoom,
    duration: 1,
    name: name,
    party: 3
  })
})

module.exports = bookings;
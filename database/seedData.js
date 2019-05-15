const db = require('./index.js');
const moment = require('moment');

const bookingsRef = require('./bookingsRef.js')


bookingsRef.on('child_added', (data)=>{
  console.log('CHILD_ADDED=============>', data.val());
})

bookingsRef.on('value', (snapshot)=>{
  console.log('snapshot==========>', snapshot.val())
})

let names = ['Anna', 'George', 'Randy', 'Jared', 'Casey', 'Anand', 'Din']

names.forEach((name, index)=>{
  let newRef = db.ref('bookings/'+ name)
  let allRooms = ['Las Trampas Room', 'Redwood Room', 'Walnut Room', 'Black Oak Room', 'Blue Oak Room']
  let randomIndex = Math.floor(Math.random() * allRooms.length);
  console.log(randomIndex);
  let newRoom = allRooms[randomIndex];
  console.log(newRoom);
  //data has to be saved as String, will not accept moment or Date objects
  let newTime = moment({hours: 10 + index}).toISOString();

  newRef.set({
    startTime: newTime,
    room: newRoom,
    duration: 1,
    name: name,
    party: 3
  })
})


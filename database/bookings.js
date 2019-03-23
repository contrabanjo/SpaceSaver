const bookingsRef = require('./bookingsRef.js');

const bookings = [];

bookingsRef.on('child_added', (snapshot)=>{
  bookings.push(snapshot);
})

module.exports = bookings;
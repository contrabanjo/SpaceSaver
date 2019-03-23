const db = require('./index.js')

const bookingsRef = db.ref('bookings');

module.exports = bookingsRef;
const admin = require('firebase-admin');
const serviceAccount = require('../firebaseKeys.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://study-room-database.firebaseio.com'
})

const db = admin.database()
console.log("database code run")
module.exports = db;
const moment = require('moment');

module.exports = rooms = [
  {
    location: "WCL",
    name: "Las Trampas Room",
    openHours: {
      start: moment({ hours: 10 }),
      end: moment({ hours: 20 }) //8pm
    }, //should have different hours for different days of the week
    maxCapacity: 16,
    dailyLimit: 2, //in hours
    notes: ["No dogs on the moon"]
  },
  {
    location: "WCL",
    name: "Redwood Room",
    openHours: {
      start: moment({ hours: 10 }),
      end: moment({ hours: 20 }) //8pm
    }, //should have different hours for different days of the week
    maxCapacity: 16,
    dailyLimit: 2, //in hours
    notes: ["No dogs on the moon"]
  },
  {
    location: "WCL",
    name: "Black Oak Room",
    openHours: {
      start: moment({ hours: 10 }),
      end: moment({ hours: 20 }) //8pm
    }, //should have different hours for different days of the week
    maxCapacity: 16,
    dailyLimit: 2, //in hours
    notes: ["No dogs on the moon"]
  },
  {
    location: "WCL",
    name: "Blue Oak Room",
    openHours: {
      start: moment({ hours: 10 }),
      end: moment({ hours: 20 }) //8pm
    }, //should have different hours for different days of the week
    maxCapacity: 16,
    dailyLimit: 2, //in hours
    notes: ["No dogs on the moon"]
  },
  {
    location: "WCL",
    name: "Walnut Room",
    openHours: {
      start: moment({ hours: 10 }),
      end: moment({ hours: 20 }) //8pm
    }, //should have different hours for different days of the week
    maxCapacity: 16,
    dailyLimit: 2, //in hours
    notes: ["No dogs on the moon"]
  }
]
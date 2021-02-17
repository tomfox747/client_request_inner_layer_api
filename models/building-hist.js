const mongoose = require('mongoose');
const db = require('../db/init-hist');
const connection = db

const buildingHistSchema = new mongoose.Schema({
    Id:{type:String, required:true},
    CountryCode: { type: String, required: true },
    Region: { type: String, required: true },
    City: { type: String, required: true },
    Address: { type: Array, required: true },
    Rooms: { type: String, required: true  },
    Sensors: { type: String, required: true  },
    CurrentPopulation: { type: String, required: true  },
}, { collection: 'buildingdata' });

const buildingHistModel = connection.model('bulidingdata', buildingHistSchema);

module.exports = buildingHistModel;
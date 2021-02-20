const mongoose = require('mongoose')
const db = require('../db/initAuth')
const connection = db;

const Schema = mongoose.Schema({
    origins:String
},{collection:'clientinternalorigins'})

const authModel = db.model('clientinternalorigins', Schema)

module.exports = authModel
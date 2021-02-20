const init = require('./connection')
const connectionString = "mongodb+srv://super:supertom@currentdata.ftroe.mongodb.net/authentication?retryWrites=true&w=majority"
const databaseName = "authentication"

const db = init(connectionString, databaseName)

module.exports = db;
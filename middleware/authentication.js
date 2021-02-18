const mongoose = require('mongoose')

const connectionString = "mongodb+srv://super:supertom@currentdata.ftroe.mongodb.net/authentication?retryWrites=true&w=majority"
const databaseName = "authentication"

const authenticateOrigin = async (req,res,next) =>{
    const forwarded = req.headers['x-forwarded-for']
    const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress

    mongoose.createConnection(connectionString,{ useNewUrlParser: true, useUnifiedTopology: true, dbName: databaseName})

    mongoose.connection.on('connected', () =>{
        console.log("database connection successful")
    })
    mongoose.connection.on('error',() =>{
        console.error("Mongoose connection error", err);
        process.exit(0);
    })

    const schema = mongoose.Schema({
        origin:String
    })

    const OriginObject = mongoose.model('clientinternalorigins', schema);

    const response = await OriginObject.find({}).lean().exec();

    if(response.filter(element => element.origin === ip)){
        console.log("client has been authorized")
    }else{
        res.send("Client is not authorized to make data requests");
    }
    delete mongoose.connection.models['clientinternalorigins'];

    next();
}

module.exports = authenticateOrigin
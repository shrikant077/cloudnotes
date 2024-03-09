const mongoose = require('mongoose');

const mongoURI = "mongodb://127.0.0.1:27017/enotes?readPreference=primary&appName=MongoDB+Compass&directConnection=true&tls=false";

const connectToMongo = () => {
    mongoose.connect(mongoURI).then(() => {
        console.log("Connected Successfully to Mongo")
    }).catch((e) => {
        console.log(e.message)
    })
}
module.exports = connectToMongo;
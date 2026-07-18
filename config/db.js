const mongoose = require('mongoose');

const connection = mongoose.createConnection('mongodb+srv://nipundilshan991_db_user:r8zWUeRtVw5bmM6L@cluster0.s3oit5d.mongodb.net/canteen').on('open', () => {
    console.log("MongoDb connected");
}).on('error', () => {
    console.log("MongoDb not connected");
});

module.exports = connection;
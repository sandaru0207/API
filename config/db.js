const mongoose = require('mongoose');

const connection = mongoose.createConnection('mongodb+srv://sandaru:sandaru%40123@cluster0.i8tuzrl.mongodb.net/canteen').on('open',()=>{
    console.log("MongoDb connected");
}).on('error',()=>{
    console.log("MongoDb not connected");
});

module.exports = connection;
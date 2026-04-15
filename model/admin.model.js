const mongoose = require('mongoose');
const db = require('../config/db');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;

const adminSchema = new Schema({
    username:{
        type:String,
        required : true,
        unique : true,
    },
    password:{
        type:String,
        required : true,
    },
});

adminSchema.methods.comparePassword = async function(userPassword){
    try{
        const isMatch = userPassword === this.password;
        return isMatch;
    } catch(error) {
        throw error
    }
}

const AdminModel = db.model('admins', adminSchema);



module.exports = AdminModel;
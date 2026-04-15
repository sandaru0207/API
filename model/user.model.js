const mongoose = require('mongoose');
const db = require('../config/db');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;

const userSchema = new Schema({
    mobile_number:{
        type:String,
        required : true,
        unique : true,
    },
    name:{
        type:String,
        required : true,
    },

    faculty:{
        type:String,
        required : true,
    },

    address:{
        type:String,
        required : true,
    },

    password:{
        type:String,
        required : true,
    },

});


userSchema.pre('save', async function(){
    try{
        var user = this;
        const salt = await(bcrypt.genSalt(10));
        const hashpass = await bcrypt.hash(user.password,salt);

        user.password = hashpass;
    }catch(error){
        throw error
    }
});

userSchema.methods.comparePassword = async function(userPassword){
    try{
        const isMatch = await bcrypt.compare(userPassword, this.password);
        return isMatch;
    } catch(error) {
        throw error
    }
}

const UserModel = db.model('user', userSchema);



module.exports = UserModel;


const mongoose = require('mongoose');
const db = require('../config/db');

const { Schema } = mongoose;

const orderSchema = new Schema({
    mobile_number:{
        type:String,
        required : true,
        unique : false,
    },
    total:{
        type:Number,
        required: true,
    },

    veg_count:{
        type:Number,
        required: false,
    },

    veg_price:{
        type:Number,
        required: false,
    },

    egg_count:{
        type:Number,
        required: false,
    },
    egg_price:{
        type:Number,
        required: false,
    },

    chicken_count:{
        type:Number,
        required: false,
    },

    chicken_price:{
        type:Number,
        required: false,
    },

    rice_count:{
        type:Number,
        required: false,
    },

    rice_price:{
        type:Number,
        required: false,
    },

    kottu_count:{
        type:Number,
        required: false,
    },

    kottu_price:{
        type:Number,
        required: false,
    },

    fish_count:{
        type:Number,
        required: false,
    },

    fish_price:{
        type:Number,
        required: false,
    },

});

const OrderSchema = db.model('orders', orderSchema);

module.exports = OrderSchema;
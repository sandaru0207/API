const UserModel = require('../model/user.model');
const OrderModel = require('../model/order.model');
const AdminModel = require('../model/admin.model');
const jwt = require('jsonwebtoken');

class UserService{
    static async register(mobile_number,name,faculty,address,password){
        try{
            const createUser = new UserModel({mobile_number,name,faculty,address,password});
            return await createUser.save();
        }catch(error){
            if(error.code === 11000){
                throw new Error('Mobile Number Already in use');
            }
            throw error;
        }
    }

    static async checkuser(mobile_number){
        try{
            return await UserModel.findOne({mobile_number});
        } catch(error){
            throw error
        }
    }

    static async admincheckuser(username){
        try{
            return await AdminModel.findOne({username});
        } catch(error){
            throw error
        }
    }

    static async genarateToken(tokenData, secretKey,jwt_expire){
        return jwt.sign(tokenData,secretKey,{expiresIn:jwt_expire})
    }

    static async placeorder(mobile_number,total,veg_count,veg_price,egg_count,egg_price,chicken_count,chicken_price,rice_count,rice_price,kottu_count,kottu_price,fish_count,fish_price){
        try{
            const creteOrder = new OrderModel({mobile_number,total,veg_count,veg_price,egg_count,egg_price,chicken_count,chicken_price,rice_count,rice_price,kottu_count,kottu_price,fish_count,fish_price});
            return await creteOrder.save();
        }catch(error){         
            throw error;
        }
    }

    

}

module.exports = UserService;
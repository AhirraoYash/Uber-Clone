//for mongodb
//user to interact with mongodb
const userModel=require('../models/user.model')

//use to create user
module.exports.createUser=async({
    firstname,lastname,email,password
})=>{
    if(!firstname || !email || !password){
        throw new Error("All fields are required");
    }
    const user= await userModel.create({
        fullname:{
            firstname,
            lastname,
        },
        email,
        password
    })
    return user;


}
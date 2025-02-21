const mongoose=require('mongoose'); //import mongoose (npm i mongoose)

//Connect to database
function connectToDb(){
    mongoose.connect(process.env.DB_CONNECT).then(()=>{ 
        console.log("connected to DB")
    }).catch(err=>console.log(err));
}

module.exports=connectToDb;

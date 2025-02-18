const dotenv=require('dotenv') //npm i dotenv cors
dotenv.config();
const cors=require('cors');
const express=require('express');
const app=express();


app.use(cors());

app.get('/',(req,res)=>{
    res.send("hello Yash");
})

module.exports=app;
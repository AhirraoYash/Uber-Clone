const dotenv=require('dotenv') //npm i dotenv cors
dotenv.config();
const cors=require('cors');
const express=require('express');
const app=express();
const connectToDb=require('./db/db'); 
connectToDb();
const userRoutes=require('./Routes/user.routes')



app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}));


app.get('/',(req,res)=>{
    res.send("hello Yash");
})

app.use('/users',userRoutes);

module.exports=app;
//this is basic register page 
const express=require('express');
const router=express.Router();
const {body}=require("express-validator") //check user data npm i express-validator
const userController=require("../controllers/user.controller");
//if any error found in data then user Controller perform action
// router.post('/register',[
//     body('email').isEmail().withMessage('Invalid Email'),
//     body('fullname.firstname').isLength({min:3}).withMessage('First much be minimum 3 length'),
//     body('password').isLength({min:6})
// ],
//     userController.registerUser //if any operation perform on user then userController is use
// )

router.post('/register', [
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
    body('fullname.lastname').optional().isLength({ min: 3 }).withMessage('Last name must be at least 3 characters long'),
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
], userController.registerUser);




module.exports=router;
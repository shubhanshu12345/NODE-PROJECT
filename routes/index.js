const express=require("express");
const router=express.Router();
const homeController=require("../controllers/home_controller");


console.log("ROUTER IS LOADED");

router.get('/',homeController.home);


// ab /users/  ke aage kuch bhi vo isme jaake chalega
router.use('/users',require('./users'));



module.exports=router;
const express=require("express");
const router=express.Router();
const homeController=require("../controllers/home_controller");


console.log("ROUTER IS LOADED");

router.get('/home',homeController.home);


// ab /users/  ke aage kuch bhi vo isme jaake chalega
router.use('/users',require('./users'));


// ab /posts/  ke aage kuch bhi vo isme jaake chalega
router.use('/posts',require('./post'));

module.exports=router;
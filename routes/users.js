const express=require("express");
const router=express.Router();
const userController=require("../controllers/user_controller");

router.get('/profile',userController.profile);

router.get('/sign_in',userController.signin);

router.get('/sign_up',userController.signup);

router.post('/create',userController.create);

router.post('/create-session',userController.createsession);

module.exports=router;
const User=require('../models/users');
module.exports.profile=function(req,res){
    if(req.cookies.user_id){
        User.findById(req.cookies.user_id,function(err,user){
            if(user){
                return res.render("profile",{
                    title:"USER PROFILE",
                    user:user
                })
            }
            else{
                return res.redirect("/users/sign_in");
            }
        })
    }
    else{
        return res.redirect("/users/sign_in");
    }
   /*  return res.end("<h1> PROFILE </h1>") */
}


module.exports.signin=function(req,res){ 
    return  res.render('usersign_in',{
           title:"SIGN IN"
       })
   }
module.exports.signup=function(req,res){ 
   return  res.render('usersign_up',{
           title:"SIGN UP"
       })
   }

module.exports.create=function(req,res){ 
    console.log(req.body);
   if(req.body.password!=req.body.confirm_password){
       return res.redirect('back');
   }
   User.findOne({email:req.body.email},function(err,user){
    if(err){
        console.log("error in email");
        return;
    }
    if(!user){
        User.create(req.body,function(error,user){
            if(error){
                console.log("error in email.>>>");
                return;
            }  
            return res.redirect('/users/sign_in');
        })
    }
    else{
        return res.redirect('back');
    }
})
}
//sign in and creating session
module.exports.createsession=function(req,res){ 
   //find the user
   User.findOne({email:req.body.email},function(err,user){
    if(err){
        console.log("error in email");
        return;
    }
    //handle user found
    if(user){
         //handle password which mismatch
         console.log(req.body);
         if(user.password != req.body.password){
            return res.redirect('back');
         }
        //handle session creation
        console.log("go");
        res.cookie("user_id",user.id);
        return res.redirect("/users/profile");

    }
    else{
         //handle user not found
         return res.redirect('back');
    }
})
   //handle user not found or user is not correct
}
     
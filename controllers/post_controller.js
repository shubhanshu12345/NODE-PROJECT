const Post=require("../models/posts");

module.exports.create=function(req,res){ 
    console.log(req.body);
    console.log(req.user);
    Post.create(
        {
            content:req.body.content,
            user: req.user._id
        }
        ,function(err,post){
            if(err){
                console.log("error in creating the post");
                return;
            }
            else{
                return res.redirect('back');
            }


    })   
}
   
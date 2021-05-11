const mongoose=require("mongoose");

const postschema= new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"users"
    }

},{
    timestamps:true
})

const Post=mongoose.model('Post',postschema);

module.exports=Post;
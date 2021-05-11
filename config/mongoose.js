const mongoose=require("mongoose");

const db="mongodb+srv://SHUBHU:Hitender123@cluster0.rfelb.mongodb.net/shubhudb?retryWrites=true&w=majority";

mongoose.connect(db,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:true
}).then(()=> {
    console.log("successful connected to db");
}).catch((err)=>{
    console.log("error");
})

module.exports=db;
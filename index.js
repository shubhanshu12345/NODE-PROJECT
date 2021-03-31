const express=require("express");
const app=express();
const port=8000;
app.use('/',require("./routes/index"))

app.listen(port,function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("server is running at",port);
    }
})
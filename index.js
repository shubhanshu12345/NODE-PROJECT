const cookieParser = require("cookie-parser");
const express=require("express");
const app=express();
const port=8000;
const path=require('path');

const db= require("./config/mongoose");
console.log(db);

app.use(express.urlencoded());
app.use(cookieParser());

app.use(express.static('./assets'));
app.set('view engine','ejs');
app.set('views',"./views");

app.use('/',require("./routes/index"));

app.listen(port,function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("server is running at",port);
    }
})
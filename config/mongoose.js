const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/YourDB", {useNewUrlParser:true,useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind( 'connection error:'));

db.once('open', function() {
 console.log("successful connected to db");
});


module.exports=db;
const mongoose=require("mongoose");
require('dotenv').config() 
console.log(process.env.port)  
const connection=mongoose.connect(process.env.MongoDB_url);
  
module.exports=connection 
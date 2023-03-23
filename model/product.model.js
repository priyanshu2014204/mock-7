const mongoose=require("mongoose");
require("dotenv").config()


const schema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    postedAt:{
        type:Date,
        required:true,
        default:Date.now()
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        enum:["Clothing", "Electronics", "Furniture", "Other"],
        required:true
    }
})


const Product=mongoose.model("product",schema);



module.exports={Product}
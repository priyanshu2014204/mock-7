const { Product } = require("../model/product.model");

exports.addproduct = async (req, res) => {
  try {
    const { name, description, image, location, price, category } =
      req.body;

    if (
      name == undefined ||
      description == undefined ||
      image == undefined ||
      location == undefined ||
      price == undefined ||
      category == undefined
    ) {
      return res.status(400).send({ msg: "Fields are missing" });
    }
    await Product.insertMany([
      {
        name,
        description,
        image, 
        location,
        price,
        category,
      },
    ]);
    res.status(200).send({ "msg":"Product added successfully"});
  } catch (err) {
    return res.status(400).send({ 'msg': err.message });
  }
};


exports.allproducts = async (req,res)=>{
    try{
        const {product}=req.query;
        // {name:{$regex:product}}
        const Products=await Product.find()
        return res.status(200).send(Products)
    }
    catch(err){
        return res.status(400).send({ 'msg': err.message });
    }
}

exports.filterbycat= async (req,res)=>{
try{
    const {category}=req.query;
    const Products=await Product.find({category})
    return res.status(200).send(Products)
}
catch{
    return res.status(400).send({ 'msg': err.message });
}
}


exports.searchbyname = async (req,res)=>{
    try{
        const {product}=req.query;
        // {name:{$regex:product}}
        console.log(product)
        const Products=await Product.find({name:{$regex:product}})
        return res.status(200).send(Products)
    }
    catch(err){
        return res.status(400).send({ 'msg': err.message });
    }
}


exports.sortbydate= async (req,res)=>{
    try{
        const {sort}=req.query;
        // {name:{$regex:product}}
        console.log(sort);
        const Products=await Product.find().sort({postedAt:sort})
        return res.status(200).send(Products)
    }
    catch(err){
        return res.status(400).send({ 'msg': err.message });
    }
}

exports.buynow= async (req,res)=>{
    try{
        const {id}=req.query;
        // {name:{$regex:product}}
        const Products=await Product.findByIdAndDelete(id)
        return res.status(200).send({"msg":"Deleted successfully"})
    }
    catch(err){
        return res.status(400).send({ 'msg': err.message });
    }
}
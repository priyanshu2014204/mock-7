const express=require("express");
const { addproduct, allproducts, filterbycat, searchbyname, sortbydate, buynow } = require("../controllers/product");
const router=express.Router();

router.post('/add',addproduct)
router.get('/all',allproducts);
router.get('/bycategory',filterbycat);
router.get('/byname',searchbyname);
router.get('/bydate',sortbydate);
router.delete('/buynow',buynow)

module.exports=router
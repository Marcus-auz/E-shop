const express=require('express');
const path=require('path');
const rootDir=require('../util/path');
const router=express.Router();
//storing products in variable temp later we will strore in databse
const product =[];

//only get request at add product (served html file)
router.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','add-product.html'));
});

router.post('/add-product',(req,res,next)=>{
    product.push({title:req.body.title}); //fetching title from request body
    res.redirect('/');
});


module.exports=router;
module.exports=product;
const express=require('express');
const router=express.Router();

//only get request at add product
router.get('/add-product',(req,res,next)=>{
    res.send(
        '<form action="/product" method="POST"><input type="text" name="title"><button type "submit">'
    );
});

router.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});


module.exports=router;
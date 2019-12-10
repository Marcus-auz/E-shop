const bodyparser=require('body-parser');
const express=require('express');
const path=require('path');

const app=express();
const PORT=3000;

const adminroutes=require('./routes/admin');
const shoproutes=require('./routes/shop');

app.use(bodyparser.urlencoded({extended:true}));
app.use('/admin'.adminroutes);
app.use('',shoproutes);

//if nothing runs then this middleware runs and shows and error
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'../','views','404.html'));
});


app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
});

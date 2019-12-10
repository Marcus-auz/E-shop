const bodyparser=require('body-parser');
const express=require('express');
const adminroutes=require('./routes/admin');
const shoproutes=require('./routes/shop');

const app=express();
const PORT=3000;

app.use(bodyparser.urlencoded({extended:true}));
app.use(adminroutes);
app.use(shoproutes);

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
});

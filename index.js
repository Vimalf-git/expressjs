// import express from "express";
const express=require('express');

const app=express();
const routes=require('./src/route');

app.use(express.json())

require('dotenv').config();
const PORT=process.env.PORT;
console.log(typeof(PORT));


app.use('/',routes);
app.listen(parseInt(PORT))
















// app.get('/',(req,res)=>{

//     res.send(`<h1>welcome to express</h1>`)
// });


// app.get('/coupons/:id',(req,res)=>{
// const id=Number(req.params.id);
// console.log(id);
// if(id!=NaN && id<coupons.length){
//     res.status(200).send({
//         message:'data are fetched succesfull',
//         count:coupons.length,
//         coupons:coupons[id]
// });
// }else{
//     res.status(400).send("Invalid Id");
// }
// })


// app.post('/create',(req,res)=>{
//     const data=req.body;
//     const codeCheck=coupons.filter(e=>e.couponId===data.couponId);
// console.log(codeCheck);
// if(codeCheck.length===0){
//     coupons.push(data);
//     // console.log(data);
//     res.status(201).send({message:"created successfully"})
// }else{
//     res.status(400).send({message:"couponId is already exist"})

// }
   
// })


// app.put('/update/:id',(req,res)=>{

//     const data=req.body;
//     const id=Number(req.params.id);
//     if(id!=NaN&& id<coupons.length){
//         coupons.splice(id,1,data);
//         res.send({message:'Successfully Updated'})
//     }else{
//         res.send({message:'Invalid Id'})
//     }
// })


// app.delete('/delete/:id',(req,res)=>{
//     const id=Number(req.params.id);
//     if(id!=NaN&& id<coupons.length){
//         coupons.splice(id,1);
//         res.send({message:'Successfully Deleted'})
//     }else{
//         res.send({message:'Invalid Id'})
//     }
// })

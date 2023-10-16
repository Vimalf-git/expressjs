const express=require('express');

const router=express.Router();
const couponsRoutes=require('./coupons')
const userData=require('./user')
router.use('/coupons',couponsRoutes);
router.use('/user',userData); 
module.exports=router;
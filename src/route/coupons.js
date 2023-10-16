const express=require('express');
const router=express.Router();

const couponController=require('../controller/coupons')
router.get('/',couponController.getData)

module.exports=router;
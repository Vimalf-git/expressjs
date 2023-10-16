const coupons=[
    {
        name:'octomberOffer',
        couponId:'XYZ_BQY',
        startData:'15-10-2023',
        endDate:'16-10-2023',
        offerValue:100,
        discount:10
    },{
        name:'octomberOffer',
        couponId:'KJG-ASD',
        startData:'20-10-2023',
        endDate:'21-10-2023',
        offerValue:200,
        discount:10
    },{
        name:'childrensDayOffer',
        couponId:'CHILD14',
        startData:'14-11-2023',
        endDate:'14-11-2023',
        offerValue:300,
        discount:10
    }
]

const getData=((req,res)=>{
    res.status(200).send(coupons)
})

module.exports={getData}
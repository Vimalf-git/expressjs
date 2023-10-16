const userModel = require('../model/usermodel')
const getUsers = async (req, res) => {
    try {
        let users = await userModel.find()
        res.status(200).send({
            message: "User Data Fetched Successfully",
            users
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message: "Internal Server Error",
            error: error.message
        })
    } 
}
const creatData=async(req,res)=>{
    await userModel.create(req.body);
    res.send({message:"created successfully"});
}
module.exports = { getUsers ,creatData}
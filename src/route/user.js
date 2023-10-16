const usercontroller = require('../controller/user')
const express = require('express')
const route = express.Router();
route.get('/', usercontroller.getUsers);
route.post('/',usercontroller.creatData)
module.exports = route;
const mongoose=require('mongoose');

const config=require('../config/dbConfig')
require('dotenv').config();
try {
    mongoose.connect(`${process.env.dburl}/${process.env.dbName}`)
console.log('connected successfully');
} catch (error) {
    console.log(error);
}

module.exports=mongoose;
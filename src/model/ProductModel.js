
const mongoose = require('mongoose')

//--------- Create the schema of the product
const ProductSchema = mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true,default:0},
    quantity:{type:Number,required:true,default:0},
})

//---------- Create product model
const ProductModel = new mongoose.model('Product',ProductSchema);

module.exports = ProductModel;
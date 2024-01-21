const Routers = require('express').Router();
const ProductModel = require('../model/ProductModel')

//-------------- fetch all the products, using GET '/api/product'
Routers.get('/', async (req, res) => {
    try {
        const products = await ProductModel.find();

        if (products.length === 0) return res.status(200).json({ success: true, msg: "No product yet, add new" })

        return res.status(201).json({ success: true, msg: "Fetch all the products", products });

    } catch (error) { return res.status(500).json({ success: false, msg: error.message }) }
})

//-------------- Adding the products, using POST '/api/product'
Routers.post('/', async (req, res) => {
    try {
        const {title,description,price,quantity} = req.body;

        if(!title || !description || !price || !quantity) return res.status(409).json({success:false,msg:"All fields are required"})

        await ProductModel.create({title,description,price,quantity});

        return res.status(201).json({ success: true, msg: "Add a new product successfully" });

    } catch (error) { return res.status(500).json({ success: false, msg: error.message }) }
})

//-------------- Adding the products, using PUT '/api/product?id'
Routers.put('/', async (req, res) => {
    try {
        const {title,description,price,qunatity} = req.body;

        const{id} = req.query;
        
        const product = {};
        if(title) product.title = title;
        if(description) product.description = description;
        if(price) product.price = price;
        if(qunatity) product.qunatity = qunatity

        //first we find the product
        const productUpdate = await ProductModel.findById(id);
        
        if(!productUpdate) return res.status(404).json({success:false,msg:"Product not found"})

        //O/w we update detail of product
        await ProductModel.updateOne({_id:id},{$set:product},{new:true});

        return res.status(201).json({ success: true, msg: "Update the detail of product,successfully" });

    } catch (error) { return res.status(500).json({ success: false, msg: error.message }) }
})

//-------------- Adding the products, using DELETE '/api/product/id'
Routers.delete('/', async (req, res) => {
    try {
        const{id} = req.query;

        //first we find the product
        const productUpdate = await ProductModel.find({_id:id});
        
        if(!productUpdate) return res.status(404).json({success:false,msg:"Product not found"})

        //O/w we update detail of product
        await ProductModel.deleteOne({_id:id});

        return res.status(201).json({ success: true, msg: "Delete the product,successfully" });

    } catch (error) { return res.status(500).json({ success: false, msg: error.message }) }
})


module.exports = Routers;
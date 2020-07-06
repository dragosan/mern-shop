const express = require("express");
const router = express.Router();

const data = require('../../data');
const Product = require('../../models/Product');



//@route GET /api/products @desc get Products @access public
router.get('/', async (req,res)=>{
    try {
        const products = await Product.find();
        // console.log(products);
        res.send(products);
    } catch (err) {
        console.log(err)
        return res.status(500).send("System Error");
    }
})

//@route GET /api/products/:id @desc get Product  @access public
router.get('/:id',async (req,res)=>{
    try {
        const product = await Product.findById(req.params.id);
        res.send(product);
    } catch (err) {
        console.log(err)
        return res.status(500).send("System Error")
    }
})

//@route PUT /api/products/:id @desc edit Product InStock   @access public
router.put('/:id',async (req,res)=>{
    try {
        const product = await Product.findById(req.params.id);
        if(product){
            //
        }
    } catch (err) {
        console.log(err)
        return res.status(404).send("Prodcut Not Found")
    }
})

module.exports = router;
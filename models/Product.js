const {model,Schema} = require('mongoose');


const ProductSchema = new Schema({
        name: {
            type:String,
            required:true
        },
        category: {
            type:String,
            required:true
        },
        image: {
            type:String,
            required:true
        },
        price: {
            type:Number,
            required:true
        },
        brand: {
            type:String
        },
        rating: {
            type:Number,
            default:0
        },
        numReviews: {
            type:Number,
            default:0
        },
        inStock:{
            type:Number,
            required:true
        }
})

module.exports = model("Product",ProductSchema);
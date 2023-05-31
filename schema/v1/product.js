// name, images -url, desc, p_id, qty, rating, brand
import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    listOfImages: {
        type: [String],
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    product_id:{
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        requried: true
    },
    rating: {
        type: Number,
        enum: [1,2,3,4,5]
    },
    brandName: {
        type: String,
        required: true
    },
    options: {
        type: [String]
    }
}, {
    timestamps: true,
})

const product = mongoose.models.Product || mongoose.model('Product', productSchema);
export default product;
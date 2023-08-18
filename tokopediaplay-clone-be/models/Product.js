import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    link: {
        type: String,
    },
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    video_id: {
        type: String,
        required: true,
    },
});

const Product = mongoose.model('Product', productSchema);

export default Product;
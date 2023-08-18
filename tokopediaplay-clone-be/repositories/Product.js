import Product from "../models/Product.js";

export const addProduct = (link, title, price, video_id) => {
    const newProduct = Product.create({ link, title, price, video_id });

    return newProduct;
};

export const getAllProducts = () => {
    const allProducts = Product.find();

    return allProducts;
};

export const getProductById = (id) => {
    const Product = Product.findById({_id: id});

    return Product;
};

export const getProductByVideoId = (video_id) => {
    const products = Product.find({ video_id: video_id });

    return products;
    
};
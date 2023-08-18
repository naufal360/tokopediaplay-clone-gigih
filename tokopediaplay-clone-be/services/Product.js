import { addProduct, getAllProducts, getProductById, getProductByVideoId } from "../repositories/Product.js";

export const createProductService = (link, title, price, video_id) => {
    const newProduct = addProduct(link, title, price, video_id);

    return newProduct;
};

export const getAllProductsService = () => {
    const allProducts = getAllProducts();

    return allProducts;
};

export const getProductByIdService = (id) => {
    const product = getProductById(id);

    return product;
};

export const getProductByVideoIdService = (video_id) => {
    const products = getProductByVideoId(video_id);

    return products;
};
import { createProductService, getAllProductsService, getProductByIdService, getProductByVideoIdService } from "../services/Product.js";

export const createProduct = async (req, res) => {
    try {
        const { link, title, price, video_id } = req.body;

        const newProduct = await createProductService(link, title, price, video_id);

        res.status(201).json({
            data: newProduct,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

export const getAllProducts = async (req, res) => {
    try {
        const allProducts = await getAllProductsService();

        res.json({
            data: allProducts,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

export const getProductById = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await getProductByIdService(id);

        res.json({
            data: product,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

export const getProductByVideoId = async (req, res) => {
    try {
        const { video_id } = req.params;

        const products = await getProductByVideoIdService(video_id);

        // not found video id
        if (products.length === 0) {
            return res.status(404).json({
                error: "can't find the video id",
            });
        }

        res.json({
            data: products,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};
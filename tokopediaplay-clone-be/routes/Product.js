import express from 'express';
import { createProduct, getProductByVideoId } from '../controllers/Product.js';

const router = express.Router();

router.post('/products', createProduct);
router.get('/videos/:video_id/products', getProductByVideoId);

export default router;
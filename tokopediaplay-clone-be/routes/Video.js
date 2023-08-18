import express from 'express';
import { createVideo, getAllVideos, getVideoById } from '../controllers/Video.js';

const router = express.Router();

router.post('/videos', createVideo);
router.get('/videos/:id', getVideoById);
router.get('/videos', getAllVideos);
router.get('/test', (req, res) => {
    res.json({
        data: "test user",
    });
});

export default router;
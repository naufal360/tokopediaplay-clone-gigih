import express from 'express';
import { createComment, getCommentByVideoId } from '../controllers/Comment.js';

const router = express.Router();

router.post('/comments', createComment);
router.get('/videos/:video_id/comments', getCommentByVideoId);

export default router;
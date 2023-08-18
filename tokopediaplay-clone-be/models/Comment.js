import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    comment_text: {
        type: String,
        required: true,
    },
    video_id: {
        type: String,
        required: true,
    },
    created_at: {
        type: String,
        default: Date.now,
    }
});

const Comment = new mongoose.model('Comment', commentSchema);

export default Comment;
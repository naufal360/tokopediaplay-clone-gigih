import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    url_thumbnail: {
        type: String,
        required: true,
    },
    video_url: {
        type: String,
        required: true,
    },
});

const Video = new mongoose.model('Video', videoSchema);

export default Video;